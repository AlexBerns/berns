/* =========================================================================
   APP LOGIC — renders content from content.js, handles language + theme.
   No frameworks, no build step. Safe for GitHub Pages.
   ========================================================================= */
(function () {
  "use strict";

  var LS_LANG = "ab.lang";
  var LS_THEME = "ab.theme";
  var DEFAULT_LANG = SITE.langs[0].code; // English
  var DEFAULT_THEME = "light";

  /* ---- small DOM helpers ------------------------------------------------ */
  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function clear(node) { while (node.firstChild) node.removeChild(node.firstChild); }
  function byId(id) { return document.getElementById(id); }

  /* ---- state ------------------------------------------------------------ */
  function getLang() {
    var stored = null;
    try { stored = localStorage.getItem(LS_LANG); } catch (e) {}
    var ok = SITE.langs.some(function (l) { return l.code === stored; });
    return ok ? stored : DEFAULT_LANG;
  }
  function getTheme() {
    var stored = null;
    try { stored = localStorage.getItem(LS_THEME); } catch (e) {}
    return stored === "dark" || stored === "light" ? stored : DEFAULT_THEME;
  }
  function save(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  /* ---- section renderers ------------------------------------------------ */
  function sectionShell(key, t) {
    var sec = el("section", "section");
    sec.id = key;
    sec.appendChild(el("h2", "section-title", t.heading));
    return sec;
  }

  // Paragraph may be a plain string, or an array of segments where each
  // segment is a string or a link object { t: text, href: url }.
  function renderProse(sec, body) {
    var prose = el("div", "prose");
    body.forEach(function (p) {
      var para = el("p");
      if (typeof p === "string") {
        para.textContent = p;
      } else {
        p.forEach(function (seg) {
          if (typeof seg === "string") {
            para.appendChild(document.createTextNode(seg));
          } else {
            var a = el("a", null, seg.t);
            a.href = seg.href;
            if (seg.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
            para.appendChild(a);
          }
        });
      }
      prose.appendChild(para);
    });
    sec.appendChild(prose);
  }

  // Two-column entry: period (left) · org (bold) + detail lines (right).
  function renderEntries(sec, items) {
    items.forEach(function (it) {
      var entry = el("div", "entry");
      entry.appendChild(el("div", "entry-period", it.period || ""));

      var body = el("div", "entry-body");
      body.appendChild(el("p", "entry-org", it.org));

      var detail = [it.role, it.place].filter(Boolean).join(" · ");
      if (detail) body.appendChild(el("p", "entry-detail", detail));

      if (it.desc && it.desc.length) {
        it.desc.forEach(function (d) { body.appendChild(el("p", "entry-detail", d)); });
      }

      entry.appendChild(body);
      sec.appendChild(entry);
    });
  }

  function renderSkills(sec, groups) {
    groups.forEach(function (g) {
      var line = el("div", "skill-line");
      line.appendChild(el("span", "skill-key", g.name));
      line.appendChild(el("span", "skill-val", g.items.join(" · ")));
      sec.appendChild(line);
    });
  }

  /* ---- full render for a language -------------------------------------- */
  function render(langCode) {
    var langMeta = SITE.langs.filter(function (l) { return l.code === langCode; })[0];
    var t = SITE.i18n[langCode];

    document.documentElement.setAttribute("lang", langMeta.htmlLang);
    document.title = SITE.meta.name;

    // Hero
    byId("name").textContent = SITE.meta.name;
    byId("avatar").src = SITE.meta.photo;
    byId("avatar").alt = SITE.meta.name;

    var affil = byId("affil");
    clear(affil);
    t.affiliations.forEach(function (line) {
      affil.appendChild(el("p", "affil-line", line));
    });

    // Links
    var links = byId("links");
    clear(links);
    SITE.meta.links.forEach(function (lk) {
      var li = el("li");
      var a = el("a", null, lk.label);
      a.href = lk.url;
      if (lk.url.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      li.appendChild(a);
      links.appendChild(li);
    });

    // Sections
    var content = byId("content");
    clear(content);
    SITE.meta.sectionOrder.forEach(function (key) {
      var data = t[key];
      if (!data) return;
      var sec = sectionShell(key, data);

      if (data.body) renderProse(sec, data.body);
      if (data.items) renderEntries(sec, data.items);
      if (data.groups) renderSkills(sec, data.groups);

      content.appendChild(sec);
    });

    // Footer
    var footer = byId("footer");
    clear(footer);
    footer.appendChild(el("span", null, t.footer.left));

    // Reflect active language button
    Array.prototype.forEach.call(
      byId("langSwitch").children,
      function (btn) {
        btn.setAttribute("aria-pressed", btn.dataset.lang === langCode ? "true" : "false");
      }
    );

    // Theme toggle: icons (moon/sun) swap via CSS on [data-theme]; just localize the label
    byId("themeToggle").setAttribute("aria-label", t.controls.theme);
  }

  /* ---- build controls once --------------------------------------------- */
  function buildControls() {
    var sw = byId("langSwitch");
    clear(sw);
    SITE.langs.forEach(function (l) {
      var btn = el("button", "lang-btn");
      btn.type = "button";
      btn.dataset.lang = l.code;
      btn.title = l.label;
      btn.setAttribute("aria-pressed", "false");
      btn.setAttribute("aria-label", l.label);
      var img = el("img");
      img.src = l.flag;
      img.alt = l.label;
      btn.appendChild(img);
      btn.addEventListener("click", function () {
        currentLang = l.code;
        save(LS_LANG, currentLang);
        render(currentLang);
      });
      sw.appendChild(btn);
    });

    byId("themeToggle").addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme");
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      save(LS_THEME, next);
      render(currentLang); // refresh toggle label
    });
  }

  /* ---- boot ------------------------------------------------------------- */
  var currentLang = getLang();
  document.documentElement.setAttribute("data-theme", getTheme());
  buildControls();
  render(currentLang);
})();

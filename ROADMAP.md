#aurelia-interface

---

##ROADMAP

###V 0.1.0

####Layout
 - Complete ai-layout, which includes the following
 - `<a-interface>` **Global Application Wrapper**
 - `<ai-nav-aside>` **custom configurable side navigation**
 - `<ai-nav-bar>` **cutom configurable top app navigation**
 - `<ai-body>` **depending on the flex-direction of the interface**
 - `<ai-main>` **wrapper for `<router-view>`**

####Components
 - `<ai-tabs>`
     - `<tab-link>`
     - `<tab-content>`

 - `<ai-card>`
     - type: `panel | default | reveal`
     - `<card-header>`
     - `<card-content>`
     - `<card-footer>`
     - `<card-image>`

 - `<ai-action>`
     - type: `raised | flat`
     - shape: `round`
     - reveal: `boolan`

 - `<ai-modal>`
     - `<modal-header>`
     - `<modal-content>`
     - `<modal-footer>`

 - `<ai-dropdown>`
     - `<dropdown-toggle>`
     - `<dropdown-content>`

#####a-interface

**properties: **
 - aside
     - Global Aside bar bound to the root interface
 - bar
     - Global Nav-Bar bound to the root interface
 - toggles
     - Global Toggles and behaviors bound to the root interface
 - direction
     - row || column sets the `flex-direction:` property

#####ai-nav-bar

**properties**

 - size: `<xs | sm | md | lg | xl>`
 - fixed: `boolean`
 - backgorund: `background-color:`
 - text: link`color:`
 - routerConfig: Changes ai-nav-bar based on the current route
 - brand: nav-bar-brand displayed in Logo section

#####ai-nav-aside

**properties**

 - size: `<xs | sm | md | lg | xl>`
 - side: `<right | left>`
 - fixed: `boolean`
 - open: `boolean`
 - fold `boolean`
     - Make aside foldable for small icon navigation

#####Components
Similar to bootstrap's or MaterializeCSS components.



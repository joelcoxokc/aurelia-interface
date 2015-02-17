#aurelia-interface

---

##ROADMAP

###V 0.1.0

####Layout
 - Complete ai-layout, which includes the following
 - `<a-interface>` **Global Application Wrapper**
     - Complete: true
     - ETA: 2/17/15
 - `<ai-nav-aside>` **custom configurable side navigation**
     - Complete: true
     - ETA: 2/17/15
 - `<ai-nav-bar>` **cutom configurable top app navigation**
     - Complete: False
     - ETA: 2/17/15
 - `<ai-body>` **depending on the flex-direction of the interface**
     - Complete: true
 - `<ai-main>` **wrapper for `<router-view>`**
     - Complete: True


####Components
 - `<ai-tabs>`
     - `<tab-link>`
     - `<tab-content>`
     - Complete: False
     - ETA: 2/19/15


 - `<ai-card>`
     - type: `panel | default | reveal`
     - `<card-header>`
     - `<card-content>`
     - `<card-footer>`
     - `<card-image>`
     - Complete: Pending
     - ETA: 2/17/15

 - `<ai-action>`
     - type: `raised | flat`
     - shape: `round`
     - reveal: `boolan`
     - Complete: False
     - ETA: 2/18/15

 - `<ai-modal>`
     - `<modal-header>`
     - `<modal-content>`
     - `<modal-footer>`
     - Complete: False
     - ETA: 2/19/15

 - `<ai-dropdown>`
     - `<dropdown-toggle>`
     - `<dropdown-content>`
     - Complete: False
     - ETA: 2/19/15

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



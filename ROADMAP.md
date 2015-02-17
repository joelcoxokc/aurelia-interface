#aurelia-interface

---

##Goal

AI: Aurelia-Interface

> A ui web component Library, using aurelia framework.

My Vision for ai is to be able to use this Component Library, with the ability to fully customize it's visual effects. 
Additional featured include . . .

**Adding your own Custom CSS Library**

**Install and use current css Libraries EI Bootstrap, Foundation, MaterializeCSS**


##ROADMAP

Plan on completing the basic layouts and functionality of each within the given ETA

**Note** These components are necessary, because a great majority of the remaining components and layout features depend on these few components. 

These Components should be wrapped as their own customElements, controlling everything that remains within it's childNodes.



Once V0.1.0 is released, we will begin working on v0.1.1 && v0.1.2

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
 
 - `<ai-checkbox>`
 - `<ai-radio>`

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


###V 0.1.1

> Includes Updates and additional Properties for the current components.

Plan on making a list of behaviors and properties that are not listed in v0.1.0


###V 0.1.2

####Layout

 - `<ai-grid>`
   - `<ai-row>`
     - size: `1-12`
     - media: `<xs | sm | md | lg | xl>`
   - `<ai-col>`
     - size: `1-12`
     - media: `<xs | sm | md | lg | xl>`
 - `<ai-section>`
 - `<ai-content>`
 - `<ai-header>`
 - `<ai-footer>`
 
####Components

 - `<ai-collection>`
   - expandable: `boolean`
   - expanded: `boolean`
   - accordion: `boolean`
   - `<collection-header>`
     - `<collection-tools>`
   - `<collection-item>`
     - `<item-tools>` 
 
- `<ai-table>`
- `<ai-icon>`
- `<ai-form>`
- `<ai-media>`
- `<ai-animate>`
- `<ai-waves>`
- `<ai-link>`


###V 0.1.3
> Includes Updates and additional Properties for the current components.

Plan on making a list of behaviors and properties that are not listed in v0.1.2

###V 0.1.4

####Layout
 - `<ai-subheader>`
 - `<ai-aside-inner>`

####Components
 - `<ai-button-sheet>`
 - `<ai-chip>`
 - `<ai-list>`
   - `<ai-list-controls>`
 - `<ai-menu>`
 - `<ai-picker>`
 - `<ai-progress>`
 - `<ai-slider>`
 - `<ai-switch>`
 - `<ai-tooltip>`
 - `<ai-text-field>`
 
 
 
###V 0.1.5

> Includes Updates and additional Properties for the current components.

Plan on making a list of behaviors and properties that are not listed in v0.1.4


###V 0.1.6

> introduce User Select Patters

####Patterns
 - `<ai-gesture>`
 - `<ai-scroll>`
 - `<ai-swipe>`

####Layout
 - `<ai-affix>`
 
####Components
 - `<ai-select>`
 - `<ai-search>`
 - `<ai-data-grid>`
 - `<ai-notify>`
 - `<ai-popover>`
 - `<ai-collapsible>`
   - `<collapsible-item>`
 - `<ai-action-group>`
 - `<ai-btn-group>`

###V 0.1.7

> Includes Updates and additional Properties for the current components.

Plan on making a list of behaviors and properties that are not listed in v0.1.6


###V 0.1.8

> Introduce Default AI Pages

> Introduce Default AI Helpers

####Helpers
 - `<ai-shadow>`
 - `<ai-layer>`
 - `<ai-waves>`
 - `<ai-bg>`
 - `<ai-text>`

####Page
 - `<ai-page>`
 - `<ai-page-header>`
 - `<ai-page-content>`
 - `<ai-page-footer>`
 
####Layout
 - `<ai-nav>`
 
####Components

 - `<ai-input-group>`
 - `<ai-label>`
 - `<ai-thumbnail>`
 - `<ai-breadcrumb>`
 - `<ai-blockquote>`
 - `<ai-collection-group>`
 - `<ai-list-gropu>`
 - `<ai-collapsible-group>`
 - `<ai-pagination>`
 - `<ai-block>`
 
 
###V 0.1.9

> Includes Updates and additional Properties for the current components.

Plan on making a list of behaviors and properties that are not listed in v0.1.8


###V 0.1.10

####Components
 - `<ai-scrollbar>`
 
 

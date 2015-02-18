#aurelia-interface

---

##Goal

AI: Aurelia-Interface

> A ui web component Library, using aurelia framework.

My Vision for ai is to be able to use this Component Library, with the ability to fully customize it's visual effects.
Additional features include . . .

**Adding your own Custom CSS Library**

**Install and use current css Libraries EI Bootstrap, Foundation, MaterializeCSS**


##ROADMAP

Plan on completing the basic layouts and functionality of each within the given ETA

**Note** These components are necessary, because a great majority of the remaining components and layout features depend on these few components.

These Components should be wrapped as their own customElements, controlling everything that remains within it's childNodes.



Once V0.1.0 is released, we will begin working on v0.1.1 && v0.1.2

###V 0.1.0

####Directory Structure

 ```
     components/
         ai-btn.js
         ai-tabs.js
         ai-card.js
         ai-modal.js
         ai-action.js
         ai-dropdown.js
         ai-btn-checkbox.js
         ai-btn-radio.js
         index.js
     services/
         nav.js
         toggle.js
         nav-bar.js
         nav-aside.js
         index.js
     layout/
         ai-body.js
         ai-main.js
         ai-grid.js
         ai-header.js
         ai-footer.js
         ai-section.js
         ai-container.js
         index.js
     core/
         a-interface.js
         index.js
     nav/
         ai-nav-aside.js
         ai-nav-bar.js
         ai-nav.js
         index.js
     util/
         ai-class.js
         ai-toggle.js
         index.js
 ```

##Layout
 - Complete ai-layout, which includes the following

###Structure

 ```html
    <a-interface
                direction="row"
                router.bind="router"
                aside.bind="aside"
                toolbar.bind="toolbar">
        <ai-body>
            <ai-header
                        router.bind="router"
                        size.bind="toolbar.size"
                        fixed="true"
                        bg-color.bind="toolbar.bgColor"
                        text-color.bind="toolbar.text-color">
            </ai-header>

            <ai-main container="false">
                <router-view></router-view>
            </ai-main>

            <ai-footer></ai-footer>

        </ai-body>
        <ai-aside
                router.bind="router"
                side="right"
                size="md"
                fixed=true
                fold=false
                open.bind="aside.right.open">
        </ai-aside>
        <ai-aside
                router.bind="router"
                side="left"
                size="md"
                fixed=true
                fold=false
                open.bind="aside.left.open">
        </ai-aside>


    </a-interface>
 ```
#note

######These are not the only css properties being applied to each element,
######Just the important ones.

###a-interface

**Global Application Wrapper**

 - Complete: true
 - ETA: 2/17/15
 - metadata
     + `customElement('a-interface')`
     + `withProperty('direction', directionChanged) {String} <column | row>`
     + `withProperty('router')`
     + `withProperty('aside')`
     + `withProperty('toolbar')`
 - inject
     + Element
 - element.classList
     + `.a-interface`
     + `.is-column`
         * `flex-direction: column`
     + `.is-row`
         * `flex-direction: row`

---

###ai-header

**Wrapper for application dynamic header**

 - Complete: true
 - ETA: 2/17/15
 - metadata
     + `customElement('ai-header')`
     + `withProperty('router') {Object}`
     + `withProperty('size') {String} <xs | sm | md | lg | xl>`
     + `withProperty('fixed') {Boolean}`
     + `withProperty('bg-color') {String}`
     + `withProperty('text-color') {String}`
 - inject
     + Element
 - element.classList
     + `.ai-header`
     + `.header-xs`
         * `height: 48px`
     + `.header-sm`
         * `height: 64px`
     + `.header-md`
         * `height: 120px`
     + `.header-lg`
         * `height: 180px`
     + `.header-xl`
         * `height: 240px`

---

###ai-aside
 - metadata
     + `customElement('ai-aside')`
     + `withProperty('router') {Object}`
     + `withProperty('side') {String} <left | right>`
     + `withProperty('size') {String} <sm | md | lg>`
     + `withProperty('open') {Boolean}`
     + `withProperty('fold') {Boolean}`
     + `withProperty('fixed') {Boolean}`
 - inject
     + Element
 - element.classList
     + `.ai-aside`
         * `.flex-direction: column`
         * `width: 0px`
     + `.aside-open`
         * `.aside-sm`
             - `width: 200px`
         * `.aside-md`
             - `width: 250px`
         * `.aside-lg`
             - `width: 320px`
     + `.aside-fold`
         * `width: 64px`
     + `.aside-fixed`
         * `position: fixed`
     + `.aside-right`
         * `order: 2`
     + `.aside-left`
         * `order: -1`

---

###ai-body
 - metadata
     + `customElement('ai-body')`
     + `withProperty('direction') {String} (Opposite of a-interface)`
 - inject
     + Element
 - element.classList
     + `.ai-body`
     + `.body-row`
         * `flex-direction: row`
     + `.body-column`
         * `flex-direction: column`

---

###ai-main
 - metadata
     + `customElement('ai-main')`
     + `withProperty('container') {Boolean}`
 - inject
     + Element
 - element.classList
     + `.ai-main`
         * `flex-direction: column`
     + `.main-container`
         * `max-width: 70%`

---

##Nav

###ai-toolbar

The properties Here are similar to `ai-header` I have not decided whether I should wrap the `ai-toolbar` in an `ai-header` or not.

For the time being, it will be stand Alone

**Also considering naming this Layout Nav Component `ai-nav-bar`**

 - Complete: true
 - ETA: 2/17/15
 - metadata
     + `customElement('ai-toolbar')`
     + `withProperty('router') {Object}`
     + `withProperty('brand') {String}`
     + `withProperty('size') {String} <xs | sm | md | lg | xl>`
     + `withProperty('fixed') {Boolean}`
     + `withProperty('bg-color') {String}`
     + `withProperty('text-color') {String}`
 - inject
     + Element
 - element.classList
     + `.ai-toolbar`
     + `.toolbar-xs`
         * `height: 48px`
     + `.toolbar-sm`
         * `height: 64px`
     + `.toolbar-md`
         * `height: 120px`
     + `.toolbar-lg`
         * `height: 180px`
     + `.toolbar-xl`
         * `height: 240px`

###ai-aside-nav

The properties Here are similar to `ai-asie` I have not decided whether I should wrap the `ai-aside-nav` in an `ai-aside` or not.

For the time being, it will be stand Alone
 - metadata
     + `customElement('ai-aside-nav')`
     + `withProperty('router') {Object}`
     + `withProperty('side') {String} <left | right>`
     + `withProperty('size') {String} <sm | md | lg>`
     + `withProperty('open') {Boolean}`
     + `withProperty('fold') {Boolean}`
     + `withProperty('fixed') {Boolean}`
 - inject
     + Element
 - element.classList
     + `.ai-aside-nav`
         * `.flex-direction: column`
         * `width: 0px`
     + `.aside-open`
         * `.aside-sm`
             - `width: 200px`
         * `.aside-md`
             - `width: 250px`
         * `.aside-lg`
             - `width: 320px`
     + `.aside-fold`
         * `width: 64px`
     + `.aside-fixed`
         * `position: fixed`
     + `.aside-right`
         * `order: 2`
     + `.aside-left`
         * `order: -1`



##Components

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



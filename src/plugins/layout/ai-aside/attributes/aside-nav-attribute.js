import {Behavior} from 'aurelia-templating';
import {Router}   from 'aurelia-router'

let defaults = {
    class: {
        collapsible: 'aside-collapsible',
        collapse:    'nav-collapse',
        link    :    'nav-link',
        collapsed:   'is-collapsed'
    }
}



export class AsideNavAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('router');
            })
            // .syncChildren('navCollapse', 'navCollapseChanged', '[nav-collapse]')

    }

    static inject(){
        return [Element, Router]
    }

    get links(){
        return Array.prototype.slice.call(this.element.querySelectorAll('[nav-link]'));
    }

    constructor(element, router){

        this.element = element;

        this._handleLink = (evt)=>{
            evt.preventDefault();
            // router.navigate()
        }
    }

    bind(){
        console.log(this)
        this.links        && this.bindLinks();
    }

    attached(){
        this.element.classList.add('aside-nav', 'aside-collapsible-nav')
    }

    bindLinks(){
        this.links.forEach((item)=>{
            item.classList.add(defaults.class.link)
        });
    }


}


export class NavCollapseAttachedBehavior{

    static metadata(){
        return Behavior
            .withOptions().and((x)=>{
                x.withProperty('title');
                x.withProperty('collapse');
            })
            // .syncChildren('navCollapse', 'navCollapseChanged', '[nav-collapse]')

    }

    static inject(){
        return [Element]
    }

    constructor(element){

        this.element = $(element);

    }
    get collapsibleLinks(){
        return this.collapsible.find('> li a')
    }

    get collapsible(){
        return this.element.children('ul')
    }

    get link(){
        return this.element.children('a')
    }
    bind(){
        this.element.addClass(defaults.class.collapse);
        this.collapse && this.toggleCollapse()
        this.link.on('click', this.toggleCollapse.bind(this));
    }

    unbind(){
    }


    toggleCollapse(evt){
        this.collapse = !this.collapse
    }

    collapseChanged(value){
        var height = (this.collapsibleLinks.length * 36) + 'px'
        if(value){
            this.collapsible.velocity({height: height }, { display: "block", duration: '100ms' })
        } else {
            this.collapsible.velocity({ height: '0px'}, { display: "none", duration: '100ms'})
        }

    }

    bootstrapScroll(){
        // this.collapsibleLinks.each((index, item){

        //     $(item).click(function() {
        //         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        //           var target = $(this.hash);
        //           target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        //           if (target.length) {
        //             $('html,body,.ai-body').animate({
        //               scrollTop: target.offset().top - 50
        //             }, 1000);
        //             return false;
        //           }
        //         }
        //     });
        // })
    }

    bindScroll(){
        // var _this = this
        // $(document).ready(function(){
        //     _this.collapsibleLinks.each((index, item)=>{
        //       $(item).click(function() {
        //         if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        //         && location.hostname == this.hostname) {
        //           var $target = $(this.hash);
        //           $target = $target.length && $target
        //           || $('[name=' + this.hash.slice(1) +']');
        //           if ($target.length) {
        //             var targetOffset = $target.offset().top;
        //             $('.ai-body')
        //             .animate({scrollTop: targetOffset}, 1000);
        //            return false;
        //           }
        //         }
        //       });
        //     })
        // });
    }

    scrollspy(){
        // var lastId,
        // topMenu = this.collapsible,
        // topMenuHeight = topMenu.outerHeight()+15,
        // // All list items
        // menuItems = topMenu.find("a"),
        // // Anchors corresponding to menu items
        // scrollItems = menuItems.map(function(){
        //   var item = $($(this).attr("href"));
        //   if (item.length) { return item; }
        // });
        // menuItems.click(function(e){
        //   var href = $(this).attr("href"),
        //       offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
        //   $('.ai-body').stop().animate({
        //       scrollTop: offsetTop
        //   }, 300);
        //   e.preventDefault();
        // });
        // // Bind to scroll
        // $('.ai-btn').scroll(function(){
        //    // Get container scroll position
        //    var fromTop = $(this).scrollTop()+topMenuHeight;

        //    // Get id of current scroll item
        //    var cur = scrollItems.map(function(){
        //      if ($('.ai-btn').offset().top < fromTop)
        //        return this;
        //    });
        //    // Get the id of the current element
        //    cur = cur[cur.length-1];
        //    var id = cur && cur.length ? cur[0].id : "";

        //    if (lastId !== id) {
        //        lastId = id;
        //        // Set/remove active class
        //        menuItems
        //          .parent().removeClass("active")
        //          .end().filter("[href=#"+id+"]").parent().addClass("active");
        //    }
        // });
    }
}

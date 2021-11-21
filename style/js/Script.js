'use strict'



class Draggable {
    ElemSr;
    constructor(options) {    
        this.ShowItem(options);

        for (const child of options.tag.children) {
            this.addAttributeDraggable(child);
        };
    };

    ShowItem(options) {
        let {tag , DataLIst , template} = options;
        DataLIst.forEach((item) => tag.innerHTML += template(item));
    };


    addAttributeDraggable(event) {
        event.setAttribute('draggable' , true);

        event.addEventListener('dragstart' ,this.DragStart.bind(this));
        event.addEventListener('dragover' ,this.Dragover.bind(this));
        event.addEventListener('dragleave' ,this.Dragleave.bind(this));
        event.addEventListener('dragend' ,this.Dragend.bind(this));
        event.addEventListener('drop' ,this.Drop.bind(this));
    };


    DragStart(e) {
        this.ElemSr = e.target
        e.dataTransfer.setData('text/HTML', e.target.outerHTML);
    };

    Dragover(e) {
        if(e.preventDefault) e.preventDefault();

    };
    Dragleave(e) {

    };

    Dragend(e) {

        
    };
    Drop(e) {




        let target = e.target.closest('.list-item');
        let outhtml = e.dataTransfer.getData('text/HTML')
        target.insertAdjacentHTML('beforebegin', outhtml);
        target.parentNode.removeChild(this.ElemSr);
        this.addAttributeDraggable(target.previousSibling);


    };  
};
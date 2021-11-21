"use strict";

let data = [
    { id: 1, title: 'ایتم شماره 1', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ' , color : 'red'},
    { id: 2, title: 'ایتم شماره 2', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'powderblue'},
    { id: 3, title: 'ایتم شماره 3', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'green'},
    { id: 4, title: 'ایتم شماره 4', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'yellow'},
    { id: 5, title: 'ایتم شماره 5', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'gray'},
    { id: 6, title: 'ایتم شماره 6', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'gold'},
    { id: 7, title: 'ایتم شماره 7', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'red'},
    { id: 8, title: 'ایتم شماره 8', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'powderblue'},
    { id: 9, title: 'ایتم شماره 9', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'green'},
    { id: 10, title: 'ایتم شماره 10', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'pink'},
    { id: 11, title: 'ایتم شماره 11', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'gray'},
    { id: 12, title: 'ایتم شماره 12', text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ', color : 'gold'},
];


new Draggable({
    tag : document.querySelector('#main'),
    DataLIst : data,
    template : (item) => {
        return `
        <div class="list-item" id="${item.id}" style="background-color:${item.color};">
            <div class="list-item-head">
                <span class="head-id">${item.id}</span>
            </div>
            <div class="list-item-content">
                <span>${item.title}</span>
                <p>${item.text}</p>
            </div>
        </div>
        `
    }
})
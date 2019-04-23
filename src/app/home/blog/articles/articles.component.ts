import { Component, OnInit, Input } from '@angular/core';
import { Articles } from 'src/app/models/articles.model';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    styles: [`
    .image.main{
        width: auto;
        height: 100px;
        position: relative;
    }

    .image.main img {
        position: absolute;
        top: -50%;
    }

    .major { 
        display: block;
        width: 100%;
    }

    `
]
})
export class ArticlesComponent implements OnInit {

    @Input()
    articles: Articles[] = [
        {
            id: 1,
            title: 'Renderer2 Nedir? Nasil Kullanilir?' ,
            text: `Eğer Ön Yüz Geliştirme kariyerinize benim gibi henüz Javascript konusunda yetkin bile olmamanıza rağmen Jquery ile girmiş ve ön yüzde binbir türlü animasyonu yapabiliyor, butonları zıplatıyor, günleri geceleri simule ediyorsanız, Angular gibi bir framework’e geçiş yaptığınızda ilk zamanlar aklınızda şu soru oluyor: “Uygulamamda DOM üzerinde değişiklik yapmak zorundayım, ne kullanabilirim?”`,
            bannerUrl: ['https://cdn-images-1.medium.com/max/800/1*q_X46je2gMh3KJClkAtSnw.png'],
            imgAlt: 'angular',
            extUrl: `https://medium.com/@gipek03/renderer2-nedir-nasil-kullanilir-579c4a393823`        
        },
        {
            id: 2,
            title: 'Jaren "Half Man Half Superstar" Jackson' ,
            text: `Throughout the years, the Nba draft is the thing that has been keeping the hopes of the forgotten up. Other than Celtics and Spurs, a lot of teams don't have high chances of landing a quality player. You may find 2-3 rotation players in 10 years and you will be considered lucky or Draft Stealer(I totally made this up by myself).`,
            bannerUrl: ['https://cdn.vox-cdn.com/uploads/chorus_asset/file/13154659/getty-images-1015655966.0.jpg'],
            imgAlt: 'grizzlies',            
            extUrl: `https://www.grizzlybearblues.com/2018/9/25/17902092/jaren-half-man-half-superstar-jackson`        
        }
    ];

    constructor() { }

    ngOnInit(): void { }
}

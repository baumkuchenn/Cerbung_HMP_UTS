import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  users = [
    {
      id: 1,
      username: "Aldy",
      password: "aldy123"
    },
    {
      id: 2,
      username: "Oktaryano",
      password: "ryan123"
    }
  ];

  cerbungs= [
    {
      id: 1,
      title: "Interstellar",
      genre: "Romance",
      author: "Aldy",
      tglRilis: "20/09/2020",
      like: 5,
      paragraph: 3,
      url: "https://live.staticflickr.com/737/32640476365_906f64ce29_b.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum faucibus consequat. Maecenas id mi quis leo elementum blandit. Duis tristique quam eget ligula pharetra, varius iaculis neque commodo. Nunc tempus eros massa. Nulla tristique vulputate turpis, sit amet sodales arcu iaculis eget. Ut eu lectus auctor, lobortis lacus in, malesuada tortor. Nunc fringilla mi ut tortor malesuada, eu efficitur sapien fringilla. Sed consequat augue id tortor luctus, nec tincidunt est dictum."
    },
    {
      id: 2,
      title: "Gravity",
      genre: "Misteri",
      author: "Oktaryano",
      tglRilis: "13/09/2020",
      like: 6,
      paragraph: 3,
      url: "https://all-things-andy-gavin.com/wp-content/uploads/2013/10/gravity-movie.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
    },
    {
      id: 3,
      title: "Alien Covenant",
      genre: "Comedy",
      author: "Aldy",
      tglRilis: "06/09/2020",
      like: 0,
      paragraph: 1,
      url: "https://www.willitsnews.com/wp-content/uploads/migration/2017/201706/NEWS_170609993_AR_0_RALMFSWTQIMI.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo non tortor accumsan maximus. Vestibulum orci eros, venenatis ac sem eu, auctor tristique turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum felis sit amet accumsan lobortis. Pellentesque sem ipsum, mollis eu leo et, blandit ultricies nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      id: 4,
      title: "2001: A Space Odyssey",
      genre: "Romance",
      author: "Oktar",
      tglRilis: "23/08/2020",
      like: 0,
      paragraph: 1,
      url: "https://live.staticflickr.com/737/32640476365_906f64ce29_b.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo non tortor accumsan maximus. Vestibulum orci eros, venenatis ac sem eu, auctor tristique turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum felis sit amet accumsan lobortis. Pellentesque sem ipsum, mollis eu leo et, blandit ultricies nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris rutrum efficitur tortor at lacinia."
    }
  ];

  storys = [
    {
      id: 1,
      author: "Aldy",
      judulCerbung: "Interstellar",
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum faucibus consequat. Maecenas id mi quis leo elementum blandit. Duis tristique quam eget ligula pharetra, varius iaculis neque commodo. Nunc tempus eros massa. Nulla tristique vulputate turpis, sit amet sodales arcu iaculis eget. Ut eu lectus auctor, lobortis lacus in, malesuada tortor. Nunc fringilla mi ut tortor malesuada, eu efficitur sapien fringilla. Sed consequat augue id tortor luctus, nec tincidunt est dictum. Maecenas nec ullamcorper ante. Maecenas vel eros sed felis lobortis sollicitudin ac nec ipsum. Curabitur ac mi commodo, luctus sapien sit amet, fermentum sem."
    },
    {
      id: 2,
      author: "Aldy",
      judulCerbung: "Interstellar",
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed ex vitae felis vulputate lobortis. Pellentesque vel placerat ex. Phasellus elementum tellus eget tellus egestas, eu semper ligula ullamcorper. Sed rhoncus sapien nibh. In congue tristique massa at placerat. Mauris quis pulvinar dolor, non maximus urna. Nulla eget molestie neque. Donec ut libero a lectus placerat dapibus."
    },
    {
      id: 3,
      author: "Aldy",
      judulCerbung: "Interstellar",
      paragraf: "Donec velit lacus, consequat in est ut, dapibus sollicitudin orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent at ipsum ac nibh convallis convallis nec in tellus. Etiam ex dolor, placerat at faucibus volutpat, ultrices quis diam. Maecenas imperdiet accumsan quam. Duis pretium commodo dolor, id dictum nisi tincidunt vehicula. Cras elit justo, venenatis sit amet iaculis et, ultricies sit amet dui. Sed sodales ullamcorper auctor. Curabitur auctor ligula velit, et tristique ligula tempor eget. Nullam aliquet nec sapien eget feugiat. Pellentesque tellus mi, fermentum a urna in, rutrum pharetra urna. Nulla rutrum lorem quis dui semper dignissim. Cras tristique eros eget egestas iaculis."
    },
    {
      id: 4,
      author: "Oktar",
      judulCerbung: "Gravity",
      paragraf: "Donec imperdiet convallis magna ac lacinia. In volutpat erat ut purus pellentesque, eget viverra magna gravida. Maecenas quis tincidunt ligula. Nulla dignissim, eros at viverra eleifend, urna arcu vulputate nisl, at vulputate neque ante in ex. Morbi tempus lectus in ex iaculis aliquet. Nam eget eros ligula. Nam quis malesuada ipsum, ut ornare turpis. Nullam pulvinar maximus justo, non finibus ex interdum non. Nam euismod tortor nec rutrum porttitor. Nunc tristique justo sit amet turpis venenatis efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam massa mi, sodales eu ullamcorper vitae, congue eget lectus."
    },
    {
      id: 5,
      author: "Oktar",
      judulCerbung: "Gravity",
      paragraf: "Fusce ullamcorper dolor tortor, eget ultricies metus varius eget. Fusce elit nisi, varius sed tristique ac, molestie nec enim. Cras in mauris et nisl pulvinar rhoncus. Sed laoreet vel tortor et interdum. Maecenas facilisis hendrerit lacus. Nam rhoncus, lectus et tempor venenatis, mauris dolor porttitor est, eu sollicitudin dolor eros eleifend mi. Aenean id nunc nec elit interdum hendrerit. Phasellus et ex suscipit tortor tincidunt varius. Nullam posuere dui diam, eu pharetra lectus accumsan commodo."
    },
    {
      id: 6,
      author: "Oktar",
      judulCerbung: "Gravity",
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
    {
      id: 7,
      author: "Aldy",
      judulCerbung: "Alien Covenant",
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed ex vitae felis vulputate lobortis. Pellentesque vel placerat ex. Phasellus elementum tellus eget tellus egestas, eu semper ligula ullamcorper. Sed rhoncus sapien nibh. In congue tristique massa at placerat. Mauris quis pulvinar dolor, non maximus urna. Nulla eget molestie neque. Donec ut libero a lectus placerat dapibus."
    },
    {
      id: 8,
      author: "Oktar",
      judulCerbung: "2001: A Space Odyssey",
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    }
  ];

  constructor(private router: Router) { }

  CekLogin(pUsername: string, pPassword: string) {
    const user = this.users.find(u => u.username === pUsername && u.password === pPassword);
    if (user) {
      this.router.navigate(['/home']);
    }
    return !!user;
  }
}

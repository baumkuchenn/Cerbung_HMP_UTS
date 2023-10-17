import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface CerbungDanStory {
  title: string;
  author: string;
  url: string;
  newestTglUpdate: Date;
}

interface UserDanStory {
  username: string;
  newestTglUpdate: Date;
  totalLike: number;
  foto: string;
  tglDibuat: Date;
}

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  users = [
    {
      id: 1,
      username: "Aldy",
      password: "aldy123",
      tglDibuat: new Date("2020-09-01"),
      foto: "https://ih1.redbubble.net/image.2305889247.2663/raf,360x360,075,t,fafafa:ca443f4786.jpg"
    },
    {
      id: 2,
      username: "Oktar",
      password: "ryan123",
      tglDibuat: new Date("2020-08-01"),
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbPQhs3okwd7UHeVgUI7Ks0t8uKu9ZuFJdw"
    },
    {
      id: 3,
      username: "Daniel",
      password: "daniel123",
      tglDibuat: new Date("2020-07-01"),
      foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbPQhs3okwd7UHeVgUI7Ks0t8uKu9ZuFJdw"
    }
  ];

  cerbungs = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Romance",
      author: "Aldy",
      tglRilis: new Date("2020-09-20"),
      like: 3,
      paragraph: 4,
      url: "https://live.staticflickr.com/737/32640476365_906f64ce29_b.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum faucibus consequat. Maecenas id mi quis leo elementum blandit. Duis tristique quam eget ligula pharetra, varius iaculis neque commodo. Nunc tempus eros massa. Nulla tristique vulputate turpis, sit amet sodales arcu iaculis eget. Ut eu lectus auctor, lobortis lacus in, malesuada tortor. Nunc fringilla mi ut tortor malesuada, eu efficitur sapien fringilla. Sed consequat augue id tortor luctus, nec tincidunt est dictum."
    },
    {
      id: 2,
      title: "Gravity",
      genre: "Misteri",
      author: "Oktar",
      tglRilis: new Date("2020-09-13"),
      like: 3,
      paragraph: 3,
      url: "https://all-things-andy-gavin.com/wp-content/uploads/2013/10/gravity-movie.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
    },
    {
      id: 3,
      title: "Alien Covenant",
      genre: "Comedy",
      author: "Aldy",
      tglRilis: new Date("2020-09-06"),
      like: 1,
      paragraph: 1,
      url: "https://www.willitsnews.com/wp-content/uploads/migration/2017/201706/NEWS_170609993_AR_0_RALMFSWTQIMI.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo non tortor accumsan maximus. Vestibulum orci eros, venenatis ac sem eu, auctor tristique turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum felis sit amet accumsan lobortis. Pellentesque sem ipsum, mollis eu leo et, blandit ultricies nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      id: 4,
      title: "2001: A Space Odyssey",
      genre: "Romance",
      author: "Oktar",
      tglRilis: new Date("2020-08-23"),
      like: 0,
      paragraph: 2,
      url: "https://live.staticflickr.com/737/32640476365_906f64ce29_b.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo non tortor accumsan maximus. Vestibulum orci eros, venenatis ac sem eu, auctor tristique turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum felis sit amet accumsan lobortis. Pellentesque sem ipsum, mollis eu leo et, blandit ultricies nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris rutrum efficitur tortor at lacinia."
    }
  ];

  storys = [
    {
      id: 1,
      cerbungTitle: "Interstellar",
      author: "Aldy",
      tglUpdate: new Date("2020-09-20"),
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum faucibus consequat. Maecenas id mi quis leo elementum blandit. Duis tristique quam eget ligula pharetra, varius iaculis neque commodo. Nunc tempus eros massa. Nulla tristique vulputate turpis, sit amet sodales arcu iaculis eget. Ut eu lectus auctor, lobortis lacus in, malesuada tortor. Nunc fringilla mi ut tortor malesuada, eu efficitur sapien fringilla. Sed consequat augue id tortor luctus, nec tincidunt est dictum. Maecenas nec ullamcorper ante. Maecenas vel eros sed felis lobortis sollicitudin ac nec ipsum. Curabitur ac mi commodo, luctus sapien sit amet, fermentum sem."
    },
    {
      id: 2,
      cerbungTitle: "Interstellar",
      author: "Aldy",
      tglUpdate: new Date("2020-09-27"),
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed ex vitae felis vulputate lobortis. Pellentesque vel placerat ex. Phasellus elementum tellus eget tellus egestas, eu semper ligula ullamcorper. Sed rhoncus sapien nibh. In congue tristique massa at placerat. Mauris quis pulvinar dolor, non maximus urna. Nulla eget molestie neque. Donec ut libero a lectus placerat dapibus."
    },
    {
      id: 3,
      cerbungTitle: "Interstellar",
      author: "Aldy",
      tglUpdate: new Date("2020-10-01"),
      paragraf: "Donec velit lacus, consequat in est ut, dapibus sollicitudin orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent at ipsum ac nibh convallis convallis nec in tellus. Etiam ex dolor, placerat at faucibus volutpat, ultrices quis diam. Maecenas imperdiet accumsan quam. Duis pretium commodo dolor, id dictum nisi tincidunt vehicula. Cras elit justo, venenatis sit amet iaculis et, ultricies sit amet dui. Sed sodales ullamcorper auctor. Curabitur auctor ligula velit, et tristique ligula tempor eget. Nullam aliquet nec sapien eget feugiat. Pellentesque tellus mi, fermentum a urna in, rutrum pharetra urna. Nulla rutrum lorem quis dui semper dignissim. Cras tristique eros eget egestas iaculis."
    },
    {
      id: 4,
      cerbungTitle: "Gravity",
      author: "Oktar",
      tglUpdate: new Date("2020-09-13"),
      paragraf: "Donec imperdiet convallis magna ac lacinia. In volutpat erat ut purus pellentesque, eget viverra magna gravida. Maecenas quis tincidunt ligula. Nulla dignissim, eros at viverra eleifend, urna arcu vulputate nisl, at vulputate neque ante in ex. Morbi tempus lectus in ex iaculis aliquet. Nam eget eros ligula. Nam quis malesuada ipsum, ut ornare turpis. Nullam pulvinar maximus justo, non finibus ex interdum non. Nam euismod tortor nec rutrum porttitor. Nunc tristique justo sit amet turpis venenatis efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam massa mi, sodales eu ullamcorper vitae, congue eget lectus."
    },
    {
      id: 5,
      cerbungTitle: "Gravity",
      author: "Oktar",
      tglUpdate: new Date("2020-09-20"),
      paragraf: "Fusce ullamcorper dolor tortor, eget ultricies metus varius eget. Fusce elit nisi, varius sed tristique ac, molestie nec enim. Cras in mauris et nisl pulvinar rhoncus. Sed laoreet vel tortor et interdum. Maecenas facilisis hendrerit lacus. Nam rhoncus, lectus et tempor venenatis, mauris dolor porttitor est, eu sollicitudin dolor eros eleifend mi. Aenean id nunc nec elit interdum hendrerit. Phasellus et ex suscipit tortor tincidunt varius. Nullam posuere dui diam, eu pharetra lectus accumsan commodo."
    },
    {
      id: 6,
      cerbungTitle: "Gravity",
      author: "Oktar",
      tglUpdate: new Date("2020-09-27"),
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
    {
      id: 7,
      cerbungTitle: "Alien Covenant",
      author: "Aldy",
      tglUpdate: new Date("2020-09-06"),
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed ex vitae felis vulputate lobortis. Pellentesque vel placerat ex. Phasellus elementum tellus eget tellus egestas, eu semper ligula ullamcorper. Sed rhoncus sapien nibh. In congue tristique massa at placerat. Mauris quis pulvinar dolor, non maximus urna. Nulla eget molestie neque. Donec ut libero a lectus placerat dapibus."
    },
    {
      id: 8,
      cerbungTitle: "2001: A Space Odyssey",
      author: "Oktar",
      tglUpdate: new Date("2020-08-23"),
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
    {
      id: 9,
      cerbungTitle: "2001: A Space Odyssey",
      author: "Daniel",
      tglUpdate: new Date("2020-08-24"),
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
    {
      id: 10,
      cerbungTitle: "Interstellar",
      author: "Daniel",
      tglUpdate: new Date("2020-08-26"),
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
  ];

  private loggedInUser: string | null = null;

  constructor(private router: Router) { }

  CekLogin(pUsername: string, pPassword: string) {
    const user = this.users.find(u => u.username === pUsername && u.password === pPassword);
    if (user) {
      this.loggedInUser = pUsername;
      this.router.navigate(['/home']);
    }
    return !!user;
  }

  getLoggedInUser(): string | null {
    return this.loggedInUser;
  }

  getUserProfile(): { username: string; foto: string } | null {
    if (this.loggedInUser) {
      const user = this.users.find(u => u.username === this.loggedInUser);
      if (user) {
        return {
          username: user.username,
          foto: user.foto
        };
      }
    }
    return null;
  }

  getHighestLikeCerbung(): number | null {
    const result = this.cerbungs.reduce((max, current) => (current.like > max.like ? current : max), this.cerbungs[0]);
    return result ? result.like : null;
  }

  getCerbungDanStory(): CerbungDanStory[] {
    // Untuk menyimpan tglUpdate terbaru u/ setiap cerbung
    const newestTglUpdatesMap = new Map<string, Date>();
    // Untuk mencari tglUpdate terbaru u/ setiap cerbung
    this.storys.forEach(story => {
      const currentNewestTglUpdate = newestTglUpdatesMap.get(story.cerbungTitle);

      if (!currentNewestTglUpdate || story.tglUpdate > currentNewestTglUpdate) {
        newestTglUpdatesMap.set(story.cerbungTitle, story.tglUpdate);
      }
    });
    // Menggabungkan dari array cerbung dan tglUpdateTerbaru dari map sebelumnya
    const combinedInfo: CerbungDanStory[] = this.cerbungs
      .filter(cerbung => cerbung.author !== this.loggedInUser) // Filter supaya tidak menampilkan cerita author yg login
      .map(cerbung => {
        const newestTglUpdate = newestTglUpdatesMap.get(cerbung.title) || cerbung.tglRilis;
        return {
          title: cerbung.title,
          author: cerbung.author,
          url: cerbung.url,
          newestTglUpdate: newestTglUpdate
        };
      });

    // Diurutkan berdasarkan tglUpdate terbaru
    combinedInfo.sort((a, b) => b.newestTglUpdate.getTime() - a.newestTglUpdate.getTime());

    return combinedInfo;
  }

  getUserDanStory(): UserDanStory[] {
    // To store the newest tglUpdate for each user
    const newestTglUpdatesMap = new Map<string, Date>();
    // To store the total like for each user
    const totalLikesMap = new Map<string, number>();

    // Find the newest tglUpdate for each user from the storys array
    this.storys.forEach(story => {
      const currentNewestTglUpdate = newestTglUpdatesMap.get(story.author);
      if (!currentNewestTglUpdate || story.tglUpdate > currentNewestTglUpdate) {
        newestTglUpdatesMap.set(story.author, story.tglUpdate);
      }
    });
    this.cerbungs.forEach(cerbung => {
      // Calculate the total like for each author from the cerbungs array
      const currentTotalLikes = totalLikesMap.get(cerbung.author) || 0;
      totalLikesMap.set(cerbung.author, currentTotalLikes + (cerbung.like || 0));
    });

    // Combine information from users, cerbungs, and tglUpdate from the map
    const combinedInfo: UserDanStory[] = this.users
      .filter(user => user.username !== this.loggedInUser)
      .map(user => {
        const newestTglUpdate = newestTglUpdatesMap.get(user.username) || user.tglDibuat;
        const totalLike = totalLikesMap.get(user.username) || 0;

        return {
          username: user.username,
          newestTglUpdate: newestTglUpdate,
          totalLike: totalLike,
          foto: user.foto,
          tglDibuat: user.tglDibuat
        };
      });

    // Sort by the highest totalLike
    combinedInfo.sort((a, b) => b.totalLike - a.totalLike);

    return combinedInfo;
  }

  getUserDanStorySemua(): UserDanStory[] {
    // To store the newest tglUpdate for each user
    const newestTglUpdatesMap = new Map<string, Date>();
    // To store the total like for each user
    const totalLikesMap = new Map<string, number>();

    // Find the newest tglUpdate for each user from the storys array
    this.storys.forEach(story => {
      const currentNewestTglUpdate = newestTglUpdatesMap.get(story.author);
      if (!currentNewestTglUpdate || story.tglUpdate > currentNewestTglUpdate) {
        newestTglUpdatesMap.set(story.author, story.tglUpdate);
      }
    });
    this.cerbungs.forEach(cerbung => {
      // Calculate the total like for each author from the cerbungs array
      const currentTotalLikes = totalLikesMap.get(cerbung.author) || 0;
      totalLikesMap.set(cerbung.author, currentTotalLikes + (cerbung.like || 0));
    });

    // Combine information from users, cerbungs, and tglUpdate from the map
    const combinedInfo: UserDanStory[] = this.users
      .map(user => {
        const newestTglUpdate = newestTglUpdatesMap.get(user.username) || user.tglDibuat;
        const totalLike = totalLikesMap.get(user.username) || 0;

        return {
          username: user.username,
          newestTglUpdate: newestTglUpdate,
          totalLike: totalLike,
          foto: user.foto,
          tglDibuat: user.tglDibuat
        };
      });

    // Sort by the highest totalLike
    combinedInfo.sort((a, b) => b.totalLike - a.totalLike);

    return combinedInfo;
  }
}

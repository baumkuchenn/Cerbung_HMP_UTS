import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

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
      foto: "https://ih1.redbubble.net/image.4988490001.6938/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg"
    }
  ];

  cerbungs = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Romance",
      author: "Aldy",
      tglRilis: new Date("2020-09-20"),
      url: "https://live.staticflickr.com/737/32640476365_906f64ce29_b.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum faucibus consequat. Maecenas id mi quis leo elementum blandit. Duis tristique quam eget ligula pharetra, varius iaculis neque commodo. Nunc tempus eros massa. Nulla tristique vulputate turpis, sit amet sodales arcu iaculis eget. Ut eu lectus auctor, lobortis lacus in, malesuada tortor. Nunc fringilla mi ut tortor malesuada, eu efficitur sapien fringilla. Sed consequat augue id tortor luctus, nec tincidunt est dictum."
    },
    {
      id: 2,
      title: "Gravity",
      genre: "Misteri",
      author: "Oktar",
      tglRilis: new Date("2020-09-13"),
      url: "https://all-things-andy-gavin.com/wp-content/uploads/2013/10/gravity-movie.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;"
    },
    {
      id: 3,
      title: "Alien Covenant",
      genre: "Comedy",
      author: "Aldy",
      tglRilis: new Date("2020-09-06"),
      url: "https://www.willitsnews.com/wp-content/uploads/migration/2017/201706/NEWS_170609993_AR_0_RALMFSWTQIMI.jpg",
      shortDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a leo non tortor accumsan maximus. Vestibulum orci eros, venenatis ac sem eu, auctor tristique turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vestibulum felis sit amet accumsan lobortis. Pellentesque sem ipsum, mollis eu leo et, blandit ultricies nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      id: 4,
      title: "2001: A Space Odyssey",
      genre: "Romance",
      author: "Oktar",
      tglRilis: new Date("2020-08-23"),
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
      like: 1,
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum faucibus consequat. Maecenas id mi quis leo elementum blandit. Duis tristique quam eget ligula pharetra, varius iaculis neque commodo. Nunc tempus eros massa. Nulla tristique vulputate turpis, sit amet sodales arcu iaculis eget. Ut eu lectus auctor, lobortis lacus in, malesuada tortor. Nunc fringilla mi ut tortor malesuada, eu efficitur sapien fringilla. Sed consequat augue id tortor luctus, nec tincidunt est dictum. Maecenas nec ullamcorper ante. Maecenas vel eros sed felis lobortis sollicitudin ac nec ipsum. Curabitur ac mi commodo, luctus sapien sit amet, fermentum sem."
    },
    {
      id: 2,
      cerbungTitle: "Interstellar",
      author: "Aldy",
      tglUpdate: new Date("2020-09-27"),
      like: 1,
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed ex vitae felis vulputate lobortis. Pellentesque vel placerat ex. Phasellus elementum tellus eget tellus egestas, eu semper ligula ullamcorper. Sed rhoncus sapien nibh. In congue tristique massa at placerat. Mauris quis pulvinar dolor, non maximus urna. Nulla eget molestie neque. Donec ut libero a lectus placerat dapibus."
    },
    {
      id: 3,
      cerbungTitle: "Interstellar",
      author: "Aldy",
      tglUpdate: new Date("2020-10-01"),
      like: 1,
      paragraf: "Donec velit lacus, consequat in est ut, dapibus sollicitudin orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent at ipsum ac nibh convallis convallis nec in tellus. Etiam ex dolor, placerat at faucibus volutpat, ultrices quis diam. Maecenas imperdiet accumsan quam. Duis pretium commodo dolor, id dictum nisi tincidunt vehicula. Cras elit justo, venenatis sit amet iaculis et, ultricies sit amet dui. Sed sodales ullamcorper auctor. Curabitur auctor ligula velit, et tristique ligula tempor eget. Nullam aliquet nec sapien eget feugiat. Pellentesque tellus mi, fermentum a urna in, rutrum pharetra urna. Nulla rutrum lorem quis dui semper dignissim. Cras tristique eros eget egestas iaculis."
    },
    {
      id: 4,
      cerbungTitle: "Gravity",
      author: "Oktar",
      tglUpdate: new Date("2020-09-13"),
      like: 1,
      paragraf: "Donec imperdiet convallis magna ac lacinia. In volutpat erat ut purus pellentesque, eget viverra magna gravida. Maecenas quis tincidunt ligula. Nulla dignissim, eros at viverra eleifend, urna arcu vulputate nisl, at vulputate neque ante in ex. Morbi tempus lectus in ex iaculis aliquet. Nam eget eros ligula. Nam quis malesuada ipsum, ut ornare turpis. Nullam pulvinar maximus justo, non finibus ex interdum non. Nam euismod tortor nec rutrum porttitor. Nunc tristique justo sit amet turpis venenatis efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam massa mi, sodales eu ullamcorper vitae, congue eget lectus."
    },
    {
      id: 5,
      cerbungTitle: "Gravity",
      author: "Oktar",
      tglUpdate: new Date("2020-09-20"),
      like: 1,
      paragraf: "Fusce ullamcorper dolor tortor, eget ultricies metus varius eget. Fusce elit nisi, varius sed tristique ac, molestie nec enim. Cras in mauris et nisl pulvinar rhoncus. Sed laoreet vel tortor et interdum. Maecenas facilisis hendrerit lacus. Nam rhoncus, lectus et tempor venenatis, mauris dolor porttitor est, eu sollicitudin dolor eros eleifend mi. Aenean id nunc nec elit interdum hendrerit. Phasellus et ex suscipit tortor tincidunt varius. Nullam posuere dui diam, eu pharetra lectus accumsan commodo."
    },
    {
      id: 6,
      cerbungTitle: "Gravity",
      author: "Oktar",
      tglUpdate: new Date("2020-09-27"),
      like: 1,
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
    {
      id: 7,
      cerbungTitle: "Alien Covenant",
      author: "Aldy",
      tglUpdate: new Date("2020-09-06"),
      like: 1,
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam odio sit amet augue semper, maximus mattis justo aliquet. Aliquam consequat mi mauris, eget posuere nunc suscipit et. Suspendisse eget tortor facilisis, dictum arcu eget, congue ipsum. Donec gravida neque nec dolor commodo malesuada. Aenean porttitor facilisis arcu, eget sodales lorem tincidunt vitae. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent sed ex vitae felis vulputate lobortis. Pellentesque vel placerat ex. Phasellus elementum tellus eget tellus egestas, eu semper ligula ullamcorper. Sed rhoncus sapien nibh. In congue tristique massa at placerat. Mauris quis pulvinar dolor, non maximus urna. Nulla eget molestie neque. Donec ut libero a lectus placerat dapibus."
    },
    {
      id: 8,
      cerbungTitle: "2001: A Space Odyssey",
      author: "Oktar",
      tglUpdate: new Date("2020-08-23"),
      like: 0,
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
    {
      id: 9,
      cerbungTitle: "2001: A Space Odyssey",
      author: "Daniel",
      tglUpdate: new Date("2020-08-24"),
      like: 1,
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
    {
      id: 10,
      cerbungTitle: "Interstellar",
      author: "Daniel",
      tglUpdate: new Date("2020-08-26"),
      like: 0,
      paragraf: "Praesent suscipit odio id tortor feugiat consequat. Vivamus faucibus augue sed risus hendrerit, sed cursus metus varius. Donec nec lectus faucibus, cursus quam ac, ultricies ipsum. Maecenas placerat lorem non ligula eleifend malesuada. Proin malesuada tellus vitae augue imperdiet tempor. Nulla tempus risus in justo feugiat, in viverra lectus venenatis. Nunc ultricies lectus leo, eget tempus justo hendrerit vitae. Phasellus mi metus, pellentesque nec nibh sed, commodo vulputate dolor."
    },
  ];

  notifications = [
    {
      id: 1,
      tglUpdate: new Date("2020-08-26"),
      message: "Daniel publish new story at Interstellar"
    },
    {
      id: 2,
      tglUpdate: new Date("2020-08-24"),
      message: "Daniel publish new story at 2001: A Space Odyssey"
    }
  ];

  // DATA MEMBER
  private loggedInUser: string | null = null;
  private cerbungLikes: Map<string, number> = new Map();
  private cerbungParagraf: Map<string, number> = new Map();

  constructor(private router: Router, private http: HttpClient) { }


  //USER
  login(p_username: string, p_password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username);
    body.set('password', p_password);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/hybrid/160721029/cerbung/login.php", urlEncodedData, { headers });
  }

  regis(p_username: string, p_password: string, p_foto: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', p_username);
    body.set('password', p_password);
    body.set('foto', p_foto);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/hybrid/160721029/cerbung/regis.php", urlEncodedData, { headers });
  }

  changePass(p_id: string, p_newpassword: string, p_oldpassword: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idUsers', p_id);
    body.set('old_password', p_oldpassword);
    body.set('new_password', p_newpassword);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/hybrid/160721029/cerbung/change_pass.php", urlEncodedData, { headers });
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
  getAllUser():Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160721029/cerbung/display_users.php");
  }

  getMostLikedUser():Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160721029/cerbung/display_usersMostLiked.php");
  }

  // CERITA
  getCerita(): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160721029/cerbung/get_cerita.php");
  }

  getCeritaSearch(key: string): Observable<any> {
    return this.http.get("https://ubaya.me/hybrid/160721029/get_cerita.php?key=" + key);
  }

  getFollowedCerita(pIdUser: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idUser', pIdUser);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/get_cerita_follow.php", urlEncodedData, { headers });
  }

  getDetailCerita(pIdCerita: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idCerita', pIdCerita);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/get_detail_cerita.php", urlEncodedData, { headers });
  }

  getData(pIdCerita: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idCerita', pIdCerita);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/get_data.php", urlEncodedData, { headers });
  }

  cekFollowCerita(pIdCerita: string, pIdUser: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idCerita', pIdCerita);
    body.set('idUser', pIdUser);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/cek_follow_cerita.php", urlEncodedData, { headers });
  }

  tambahFollowCerita(pIdCerita: string, pIdUser: string, pStatus: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idCerita', pIdCerita);
    body.set('idUser', pIdUser);
    body.set('status', pStatus);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/add_follow_cerita.php", urlEncodedData, { headers });
  }


  // PARAGRAF
  getParagraf(pIdCerita: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idCerita', pIdCerita);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/get_paragraf.php", urlEncodedData, { headers });
  }

  cekLikeParagraf(pIdParagraf: string, pIdUser: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idParagraf', pIdParagraf);
    body.set('idUser', pIdUser);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/cek_like_paragraf.php", urlEncodedData, { headers });
  }

  tambahLikeParagraf(pIdParagraf: string, pIdUser: string, pStatus: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idParagraf', pIdParagraf);
    body.set('idUser', pIdUser);
    body.set('status', pStatus);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/add_like_paragraf.php", urlEncodedData, { headers });
  }

  tambahParagrafBaru(pIsiParagraf: string, pIdUser: string, pIdCerita: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('isiParagraf', pIsiParagraf);
    body.set('idUser', pIdUser);
    body.set('idCerita', pIdCerita);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/add_paragraf.php", urlEncodedData, { headers });
  }

  //CREATE
  getGenre(): Observable<any> {
    return this.http.get(
      "https://ubaya.me/hybrid/160721029/cerbung/get_genre.php");
  }

  cerita: any[] = []
  access: string = ''
  paragraph: string = ''

  arrCerita(newCerita: any): void {
    this.cerita.push(newCerita);
  }
  newCerita(pTitle: string, pUrl: string, pShortDesc: string, pAccess: string, pUserId: string, pGenreId: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('title', pTitle);
    body.set('url', pUrl);
    body.set('desc', pShortDesc);
    body.set('access', pAccess);
    body.set('idUser', pUserId);
    body.set('idGenre', pGenreId);

    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160721029/cerbung/add_cerbung.php", urlEncodedData, { headers });

  }

  // LAMA
  createCerbung(newCerbung: any): void {
    newCerbung.id = this.cerbungs.length + 1;
    newCerbung.tglRilis = new Date();
    this.cerbungs.push(newCerbung);
  }

  createStory(cerbungTitle: string, paragraf: string) {
    const newStory: any = {
      id: this.storys.length + 1,
      cerbungTitle: cerbungTitle,
      author: this.loggedInUser,
      tglUpdate: new Date(),
      like: 0,
      paragraf: paragraf
    };
    this.storys.push(newStory);
  }

  caluclateParagraf(cerbungTitle: string): number {
    const relatedStories = this.storys.filter((story) => story.cerbungTitle === cerbungTitle);
    return relatedStories.length;
  }

  calculateTotalLikes(cerbungTitle: string): number {
    const relatedStories = this.storys.filter((story) => story.cerbungTitle === cerbungTitle);
    return relatedStories.reduce((totalLikes, story) => totalLikes + story.like, 0);
  }

  getHighestLikeCerbung(): any[] {
    let cerbungsWithHighestLikes: any[] = [];
    let highestLikes = -1; //Karena ada cerbung yang likenya 0

    // Cari jumlah like terbanyak
    this.cerbungs.forEach((cerbung) => {
      const totalLikes = this.calculateTotalLikes(cerbung.title);

      if (totalLikes > highestLikes) {
        highestLikes = totalLikes;
        cerbungsWithHighestLikes = [cerbung];
      } else if (totalLikes === highestLikes) {
        // Tambah cerbung jika memiliki jumlah like yang sama
        cerbungsWithHighestLikes.push(cerbung);
      }
    });
    return cerbungsWithHighestLikes;
  }

  setLikeCount(cerbungTitle: string, likeCount: number) {
    this.cerbungLikes.set(cerbungTitle, likeCount);
  }

  getLikeCount(cerbungTitle: string): number {
    return this.cerbungLikes.get(cerbungTitle) || 0;
  }

  setParagrafVount(cerbungTitle: string, paragrafCount: number) {
    this.cerbungParagraf.set(cerbungTitle, paragrafCount);
  }

  getParagrafCount(cerbungTitle: string): number {
    return this.cerbungParagraf.get(cerbungTitle) || 0;
  }

  getStoryByCerbung(cerbungTitle: string): string | undefined {
    const storyItem = this.storys.find((story) => story.cerbungTitle === cerbungTitle);
    return storyItem?.paragraf;
  }


  // DISPLAY
  getCerbungDanStory(): any[] {
    // Untuk menyimpan tglUpdate terbaru u/ setiap cerbung
    const newestTglUpdatesMap = new Map<string, Date>();
    // Untuk mencari tglUpdate terbaru u/ setiap cerbung
    this.storys.forEach(story => {
      const currentNewestTglUpdate = newestTglUpdatesMap.get(story.cerbungTitle);
      //Jika undefined atau story.tglUpdatenya lebih baru
      if (!currentNewestTglUpdate || story.tglUpdate > currentNewestTglUpdate) {
        newestTglUpdatesMap.set(story.cerbungTitle, story.tglUpdate);
      }
    });
    // Menggabungkan dari array cerbung dan tglUpdateTerbaru dari map sebelumnya
    const combinedInfo: any[] = this.cerbungs
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

  getUserDanStory(): any[] {
    // Simpan tanggal update terbaru
    const newestTglUpdatesMap = new Map<string, Date>();
    // Simpan total like setiap user
    const totalLikesMap = new Map<string, number>();

    // Cari tgl update terbaru untuk setiap user
    this.storys.forEach(story => {
      const currentNewestTglUpdate = newestTglUpdatesMap.get(story.author);
      if (!currentNewestTglUpdate || story.tglUpdate > currentNewestTglUpdate) {
        newestTglUpdatesMap.set(story.author, story.tglUpdate);
      }
    });
    // Cari total like setiap user berdasarkan paragraf yg dibuat
    this.storys.forEach(story => {
      // Update totalLikesMap
      const currentTotalLikes = totalLikesMap.get(story.author) || 0;
      totalLikesMap.set(story.author, currentTotalLikes + (story.like || 0));
    });

    // Simpan informasi gabungan pakai map
    const combinedInfo: any[] = this.users
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

  getUserDanStorySemua(): any[] {
    // Simpan tanggal update terbaru
    const newestTglUpdatesMap = new Map<string, Date>();
    // Simpan total like setiap user
    const totalLikesMap = new Map<string, number>();

    // Cari tgl update terbaru untuk setiap user
    this.storys.forEach(story => {
      const currentNewestTglUpdate = newestTglUpdatesMap.get(story.author);
      if (!currentNewestTglUpdate || story.tglUpdate > currentNewestTglUpdate) {
        newestTglUpdatesMap.set(story.author, story.tglUpdate);
      }
    });
    // Cari total like setiap user berdasarkan paragraf yg dibuat
    this.storys.forEach(story => {
      // Update totalLikesMap
      const currentTotalLikes = totalLikesMap.get(story.author) || 0;
      totalLikesMap.set(story.author, currentTotalLikes + (story.like || 0));
    });

    // Simpan informasi gabungan pakai map
    const combinedInfo: any[] = this.users
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

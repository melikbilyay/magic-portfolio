import { About, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Haktan Teymur",
  lastName: "İnşaat",
  name: `Haktan Teymur İnşaat`,
  role: "Yapı ve İnşaat",
  avatar: "/pics/HT LOGO.PNG",
  email: "",
  location: "Turkey",
  languages: [],
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};

const social: Social = [];

const home: Home = {
  path: "/",
  image: "/pics/RENDER ÖN CEPHE.jpeg",
  label: "Ana Sayfa",
  title: `Haktan Teymur İnşaat`,
  description: `Haktan Teymur İnşaat - Kaliteli ve güvenilir yapılar.`,
  headline: <>Hayallerinizi inşa ediyoruz</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      Haktan Teymur İnşaat olarak, modern ve sağlam yapılarla geleceği şekillendiriyoruz.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Hakkımızda",
  title: `Hakkımızda – ${person.name}`,
  description: `Haktan Teymur İnşaat hakkında daha fazla bilgi edinin.`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Hakkımızda",
    description: (
      <>
        <p>Haktan Teymur İnşaat, sağlam temeller üzerine inşa ettiği projelerle güveni, kaliteyi ve estetiği bir araya getiren bir inşaat firmasıdır. Modern mimari anlayışı ve mühendislik tecrübesiyle, konut ve ticari yapılar başta olmak üzere birçok alanda faaliyet göstermektedir.</p>
        <p>Kuruluşumuzdan bu yana önceliğimiz, müşterilerimize güvenli, konforlu ve değer katan yaşam alanları sunmaktır. İnşaat sektöründeki yenilikleri yakından takip ederek, her projede estetik tasarımı ve fonksiyonelliği bir arada sunmayı hedefliyoruz.</p>
        <p>Deneyimli kadromuz, işimize olan bağlılığımız ve etik değerlerimizle, yalnızca binalar değil; aynı zamanda güven ve memnuniyet üzerine kurulu kalıcı ilişkiler inşa ediyoruz.</p>
        <h3>Misyonumuz</h3>
        <p>Haktan Teymur İnşaat olarak, yenilikçi çözümler ve güçlü mühendislik altyapımızla güvenli, estetik ve sürdürülebilir yapılar inşa ediyoruz. Müşterilerimizin beklentilerini en üst seviyede karşılamayı, kalite ve güven anlayışımızla yaşanabilir mekanlar üretmeyi temel görevimiz olarak benimsiyoruz.</p>
        <h3>Vizyonumuz</h3>
        <p>İnşaat sektöründe güvenin ve kalitenin simgesi olmak; modern mimariyi, çevreye duyarlı yaklaşımı ve mühendislik disiplinini bir araya getirerek bölgemizin ve ülkemizin önde gelen inşaat firmalarından biri haline gelmek.</p>
        <h3>Teymur Cadde</h3>
        <p>Haktan Teymur İnşaat güvencesiyle hayata geçirilen Teymur Cadde, modern yaşamın tüm ihtiyaçlarını karşılayan, konforlu ve ferah bir proje olarak tasarlandı.</p>
        <ul>
          <li><strong>28 adet 2.5+1 daire:</strong> Dairelerimiz net 117 m² kullanım alanı ile geniş, işlevsel ve kat bahçeli planlarıyla öne çıkıyor. Aileler için huzurlu ve ferah yaşam alanları sunuyor.</li>
          <li><strong>8 adet cadde dükkanı:</strong> Projemizin ticari alanları, hem yatırım hem de günlük yaşamın ihtiyaçlarını karşılayacak şekilde değer katıyor.</li>
        </ul>
        <p>Teymur Cadde, merkezi konumu, modern mimarisi ve sağlam yapısıyla sadece bir konut değil; geleceğe güvenli bir yatırım fırsatı sunuyor.</p>
      </>
    ),
  },
  work: {
    display: false,
    title: "",
    experiences: [],
  },
  studies: {
    display: false,
    title: "",
    institutions: [],
  },
  technical: {
    display: false,
    title: "",
    skills: [],
  },
};

const projects: Work = {
  path: "/projects",
  label: "Projelerimiz",
  title: `Projelerimiz – ${person.name}`,
  description: `Hayallerinizi ev sıcaklığında bir yuvaya dönüştüren projelerimiz.`,
};

const services: any = {
  path: "/services",
  label: "Hizmetlerimiz",
  title: `Hizmetlerimiz – ${person.name}`,
  description: `Haktan Teymur İnşaat tarafından sunulan hizmetler.`,
};

const contact: any = {
  path: "/contact",
  label: "İletişim",
  title: `İletişim – ${person.name}`,
  description: `Haktan Teymur İnşaat ile iletişime geçin.`,
};

const gallery: any = {
  path: "/gallery",
  label: "Galeri",
  title: `Video Galeri – ${person.name}`,
  description: ``,
};

export { person, social, newsletter, home, about, projects, services, contact, gallery };

import { Component, OnInit } from '@angular/core';

import { UserModel } from './user-model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];

  ngOnInit() {

    this.users = [
      {
        id: 1,
        first_name: "Kassi",
        last_name: "Hurrell",
        email: "khurrell0@disqus.com",
        gender: "Female",
        ip_address: "170.0.140.120",
      },
      {
        id: 2,
        first_name: "Shellysheldon",
        last_name: "Pymm",
        email: "spymm1@exblog.jp",
        gender: "Male",
        ip_address: "149.41.231.3"
      },
      {
        id: 3,
        first_name: "Gerald",
        last_name: "Dearden",
        email: "gdearden2@sakura.ne.jp",
        gender: "Male",
        ip_address: "31.96.7.215"
      },
      {
        id: 4,
        first_name: "Nate",
        last_name: "Sawdon",
        email: "nsawdon3@cargocollective.com",
        gender: "Male",
        ip_address: "47.45.24.93"
      },
      {
        id: 5,
        first_name: "Nikolas",
        last_name: "Conboy",
        email: "nconboy4@woothemes.com",
        gender: "Male",
        ip_address: "179.80.130.27"
      },
      {
        id: 6,
        first_name: "Orlando",
        last_name: "Slott",
        email: "oslott5@mac.com",
        gender: "Male",
        ip_address: "45.17.200.79"
      },
      {
        id: 7,
        first_name: "Filberte",
        last_name: "McAviy",
        email: "fmcaviy6@godaddy.com",
        gender: "Male",
        ip_address: "248.215.156.216"
      },
      {
        id: 8,
        first_name: "Clifford",
        last_name: "Winwright",
        email: "cwinwright7@google.ca",
        gender: "Male",
        ip_address: "20.160.187.179"
      },
      {
        id: 9,
        first_name: "Dermot",
        last_name: "Echallier",
        email: "dechallier8@indiatimes.com",
        gender: "Male",
        ip_address: "174.245.232.42"
      },
      {
        id: 10,
        first_name: "Kariotta",
        last_name: "Pendock",
        email: "kpendock9@cnn.com",
        gender: "Female",
        ip_address: "73.50.218.191"
      },
      {
        id: 11,
        first_name: "Donal",
        last_name: "Dahler",
        email: "ddahlera@usatoday.com",
        gender: "Male",
        ip_address: "251.137.102.3"
      },
      {
        id: 12,
        first_name: "Filberto",
        last_name: "Kitchenman",
        email: "fkitchenmanb@cbsnews.com",
        gender: "Male",
        ip_address: "76.193.21.78"
      },
      {
        id: 13,
        first_name: "Maryjane",
        last_name: "McGrath",
        email: "mmcgrathc@tinypic.com",
        gender: "Female",
        ip_address: "14.16.13.243"
      },
      {
        id: 14,
        first_name: "Quincy",
        last_name: "Dodridge",
        email: "qdodridged@bloglovin.com",
        gender: "Male",
        ip_address: "204.158.214.236"
      },
      {
        id: 15,
        first_name: "Valle",
        last_name: "Meredyth",
        email: "vmeredythe@washington.edu",
        gender: "Male",
        ip_address: "255.133.173.4"
      },
      {
        id: 16,
        first_name: "Ripley",
        last_name: "Cyster",
        email: "rcysterf@a8.net",
        gender: "Male",
        ip_address: "64.48.204.45"
      },
      {
        id: 17,
        first_name: "Tracy",
        last_name: "Mountjoy",
        email: "tmountjoyg@irs.gov",
        gender: "Male",
        ip_address: "224.255.184.29"
      },
      {
        id: 18,
        first_name: "Hamnet",
        last_name: "Antonietti",
        email: "hantoniettih@uiuc.edu",
        gender: "Male",
        ip_address: "163.155.108.238"
      },
      {
        id: 19,
        first_name: "Dinnie",
        last_name: "Keunemann",
        email: "dkeunemanni@360.cn",
        gender: "Female",
        ip_address: "11.122.118.193"
      },
      {
        id: 20,
        first_name: "Louis",
        last_name: "Fereday",
        email: "lferedayj@loc.gov",
        gender: "Male",
        ip_address: "133.86.240.172"
      },
      {
        id: 21,
        first_name: "Harlen",
        last_name: "Droogan",
        email: "hdroogank@google.com.au",
        gender: "Male",
        ip_address: "205.79.50.132"
      },
      {
        id: 22,
        first_name: "Gillie",
        last_name: "Cosely",
        email: "gcoselyl@mozilla.org",
        gender: "Female",
        ip_address: "63.11.217.26"
      },
      {
        id: 23,
        first_name: "Siana",
        last_name: "Doleman",
        email: "sdolemanm@craigslist.org",
        gender: "Female",
        ip_address: "146.31.23.215"
      },
      {
        id: 24,
        first_name: "Josiah",
        last_name: "Walby",
        email: "jwalbyn@simplemachines.org",
        gender: "Male",
        ip_address: "193.54.58.175"
      },
      {
        id: 25,
        first_name: "Yankee",
        last_name: "Rendle",
        email: "yrendleo@mayoclinic.com",
        gender: "Male",
        ip_address: "65.72.239.46"
      },
      {
        id: 26,
        first_name: "Amanda",
        last_name: "Eland",
        email: "aelandp@tinyurl.com",
        gender: "Female",
        ip_address: "111.139.162.133"
      },
      {
        id: 27,
        first_name: "Claybourne",
        last_name: "Foran",
        email: "cforanq@un.org",
        gender: "Male",
        ip_address: "231.112.8.157"
      },
      {
        id: 28,
        first_name: "Brianne",
        last_name: "Barbara",
        email: "bbarbarar@sourceforge.net",
        gender: "Female",
        ip_address: "80.213.167.248"
      },
      {
        id: 29,
        first_name: "Arv",
        last_name: "Jaquest",
        email: "ajaquests@deliciousdays.com",
        gender: "Male",
        ip_address: "175.252.112.97"
      },
      {
        id: 30,
        first_name: "Sibbie",
        last_name: "Simenon",
        email: "ssimenont@google.it",
        gender: "Female",
        ip_address: "47.161.231.41"
      },
      {
        id: 31,
        first_name: "Kerr",
        last_name: "Armatys",
        email: "karmatysu@ftc.gov",
        gender: "Male",
        ip_address: "50.126.131.229"
      },
      {
        id: 32,
        first_name: "Nolly",
        last_name: "Appleton",
        email: "nappletonv@tripod.com",
        gender: "Male",
        ip_address: "117.203.53.92"
      },
      {
        id: 33,
        first_name: "Cleon",
        last_name: "McAughtrie",
        email: "cmcaughtriew@shareasale.com",
        gender: "Male",
        ip_address: "162.255.206.236"
      },
      {
        id: 34,
        first_name: "Chauncey",
        last_name: "Bilbee",
        email: "cbilbeex@tuttocitta.it",
        gender: "Male",
        ip_address: "103.59.253.128"
      },
      {
        id: 35,
        first_name: "Farlay",
        last_name: "Dionisii",
        email: "fdionisiiy@weather.com",
        gender: "Male",
        ip_address: "58.113.210.107"
      },
      {
        id: 36,
        first_name: "Claire",
        last_name: "Scryne",
        email: "cscrynez@wsj.com",
        gender: "Female",
        ip_address: "82.145.243.160"
      },
      {
        id: 37,
        first_name: "Gina",
        last_name: "Thyer",
        email: "gthyer10@newyorker.com",
        gender: "Female",
        ip_address: "172.107.51.124"
      },
      {
        id: 38,
        first_name: "Torrance",
        last_name: "Willett",
        email: "twillett11@twitter.com",
        gender: "Male",
        ip_address: "193.200.124.135"
      },
      {
        id: 39,
        first_name: "Catriona",
        last_name: "Leadbitter",
        email: "cleadbitter12@edublogs.org",
        gender: "Female",
        ip_address: "16.102.109.160"
      },
      {
        id: 40,
        first_name: "Arlen",
        last_name: "Symmers",
        email: "asymmers13@amazon.co.uk",
        gender: "Female",
        ip_address: "17.3.157.240"
      },
      {
        id: 41,
        first_name: "Claribel",
        last_name: "Aronstein",
        email: "caronstein14@webeden.co.uk",
        gender: "Female",
        ip_address: "19.203.71.191"
      },
      {
        id: 42,
        first_name: "Berta",
        last_name: "Staining",
        email: "bstaining15@ft.com",
        gender: "Female",
        ip_address: "249.47.4.47"
      },
      {
        id: 43,
        first_name: "Nichol",
        last_name: "Brobyn",
        email: "nbrobyn16@rediff.com",
        gender: "Female",
        ip_address: "88.17.97.20"
      },
      {
        id: 44,
        first_name: "Birgitta",
        last_name: "Tunmore",
        email: "btunmore17@hubpages.com",
        gender: "Female",
        ip_address: "88.239.92.85"
      },
      {
        id: 45,
        first_name: "Ty",
        last_name: "Axel",
        email: "taxel18@wikispaces.com",
        gender: "Male",
        ip_address: "90.193.112.183"
      },
      {
        id: 46,
        first_name: "Richart",
        last_name: "Hartshorn",
        email: "rhartshorn19@desdev.cn",
        gender: "Male",
        ip_address: "227.25.144.175"
      },
      {
        id: 47,
        first_name: "Claus",
        last_name: "McAlpine",
        email: "cmcalpine1a@yale.edu",
        gender: "Male",
        ip_address: "49.78.179.44"
      },
      {
        id: 48,
        first_name: "Mohandas",
        last_name: "Chesnut",
        email: "mchesnut1b@wikimedia.org",
        gender: "Male",
        ip_address: "184.135.53.179"
      },
      {
        id: 49,
        first_name: "Burty",
        last_name: "Copes",
        email: "bcopes1c@addtoany.com",
        gender: "Male",
        ip_address: "198.232.156.92"
      },
      {
        id: 50,
        first_name: "Constantine",
        last_name: "Walkden",
        email: "cwalkden1d@virginia.edu",
        gender: "Male",
        ip_address: "150.76.146.224"
      },
      {
        id: 51,
        first_name: "Connor",
        last_name: "Safhill",
        email: "csafhill1e@abc.net.au",
        gender: "Male",
        ip_address: "175.148.78.117"
      },
      {
        id: 52,
        first_name: "Aldwin",
        last_name: "Chedzoy",
        email: "achedzoy1f@t-online.de",
        gender: "Male",
        ip_address: "37.55.89.70"
      },
      {
        id: 53,
        first_name: "Kellen",
        last_name: "Dmiterko",
        email: "kdmiterko1g@soup.io",
        gender: "Female",
        ip_address: "188.34.244.125"
      },
      {
        id: 54,
        first_name: "Aldrich",
        last_name: "Pohlke",
        email: "apohlke1h@4shared.com",
        gender: "Male",
        ip_address: "88.79.56.24"
      },
      {
        id: 55,
        first_name: "Gibby",
        last_name: "Keeltagh",
        email: "gkeeltagh1i@wix.com",
        gender: "Male",
        ip_address: "101.12.149.135"
      },
      {
        id: 56,
        first_name: "Bonni",
        last_name: "D'Avaux",
        email: "bdavaux1j@vistaprint.com",
        gender: "Female",
        ip_address: "224.8.56.159"
      },
      {
        id: 57,
        first_name: "Beatrisa",
        last_name: "Raulin",
        email: "braulin1k@nps.gov",
        gender: "Female",
        ip_address: "160.75.121.230"
      },
      {
        id: 58,
        first_name: "Dinnie",
        last_name: "Mallabund",
        email: "dmallabund1l@si.edu",
        gender: "Female",
        ip_address: "69.160.202.191"
      },
      {
        id: 59,
        first_name: "Ginni",
        last_name: "Dockrell",
        email: "gdockrell1m@eepurl.com",
        gender: "Female",
        ip_address: "194.114.213.170"
      },
      {
        id: 60,
        first_name: "Kyrstin",
        last_name: "Hollingdale",
        email: "khollingdale1n@pinterest.com",
        gender: "Female",
        ip_address: "185.147.97.103"
      },
      {
        id: 61,
        first_name: "Latashia",
        last_name: "Legerwood",
        email: "llegerwood1o@deliciousdays.com",
        gender: "Female",
        ip_address: "155.58.2.56"
      },
      {
        id: 62,
        first_name: "Patrick",
        last_name: "Ingleston",
        email: "pingleston1p@princeton.edu",
        gender: "Male",
        ip_address: "216.139.101.215"
      },
      {
        id: 63,
        first_name: "Sibella",
        last_name: "Nurny",
        email: "snurny1q@admin.ch",
        gender: "Female",
        ip_address: "210.239.31.110"
      },
      {
        id: 64,
        first_name: "Salli",
        last_name: "Lanyon",
        email: "slanyon1r@thetimes.co.uk",
        gender: "Female",
        ip_address: "183.182.37.68"
      },
      {
        id: 65,
        first_name: "Theobald",
        last_name: "Crux",
        email: "tcrux1s@qq.com",
        gender: "Male",
        ip_address: "72.33.35.124"
      },
      {
        id: 66,
        first_name: "Dot",
        last_name: "Josovich",
        email: "djosovich1t@t.co",
        gender: "Female",
        ip_address: "168.103.8.199"
      },
      {
        id: 67,
        first_name: "Selby",
        last_name: "Tisun",
        email: "stisun1u@feedburner.com",
        gender: "Male",
        ip_address: "106.158.187.16"
      },
      {
        id: 68,
        first_name: "Germana",
        last_name: "Hartopp",
        email: "ghartopp1v@icq.com",
        gender: "Female",
        ip_address: "46.26.96.135"
      },
      {
        id: 69,
        first_name: "Corene",
        last_name: "Duffie",
        email: "cduffie1w@goodreads.com",
        gender: "Female",
        ip_address: "234.107.111.169"
      },
      {
        id: 70,
        first_name: "Putnam",
        last_name: "Costerd",
        email: "pcosterd1x@photobucket.com",
        gender: "Male",
        ip_address: "203.1.110.205"
      },
      {
        id: 71,
        first_name: "Doll",
        last_name: "Bonner",
        email: "dbonner1y@marketwatch.com",
        gender: "Female",
        ip_address: "209.113.8.233"
      },
      {
        id: 72,
        first_name: "Abagael",
        last_name: "Lettson",
        email: "alettson1z@apache.org",
        gender: "Female",
        ip_address: "164.35.239.43"
      },
      {
        id: 73,
        first_name: "Lamond",
        last_name: "McClune",
        email: "lmcclune20@sun.com",
        gender: "Male",
        ip_address: "38.121.237.120"
      },
      {
        id: 74,
        first_name: "Sigismond",
        last_name: "Hazelhurst",
        email: "shazelhurst21@skyrock.com",
        gender: "Male",
        ip_address: "143.68.107.7"
      },
      {
        id: 75,
        first_name: "Jason",
        last_name: "Folbig",
        email: "jfolbig22@addtoany.com",
        gender: "Male",
        ip_address: "117.126.160.26"
      },
      {
        id: 76,
        first_name: "Jeannie",
        last_name: "Arendsen",
        email: "jarendsen23@geocities.jp",
        gender: "Female",
        ip_address: "195.227.70.162"
      },
      {
        id: 77,
        first_name: "Abey",
        last_name: "Thackwray",
        email: "athackwray24@hc360.com",
        gender: "Male",
        ip_address: "243.165.26.155"
      },
      {
        id: 78,
        first_name: "Rafferty",
        last_name: "Postians",
        email: "rpostians25@biblegateway.com",
        gender: "Male",
        ip_address: "217.242.138.136"
      },
      {
        id: 79,
        first_name: "Alisa",
        last_name: "Alty",
        email: "aalty26@baidu.com",
        gender: "Female",
        ip_address: "162.255.179.28"
      },
      {
        id: 80,
        first_name: "Flint",
        last_name: "Cronin",
        email: "fcronin27@youtube.com",
        gender: "Male",
        ip_address: "197.72.96.149"
      },
      {
        id: 81,
        first_name: "Marieann",
        last_name: "Flatt",
        email: "mflatt28@aboutads.info",
        gender: "Female",
        ip_address: "51.60.143.203"
      },
      {
        id: 82,
        first_name: "Lizabeth",
        last_name: "Wooder",
        email: "lwooder29@cbslocal.com",
        gender: "Female",
        ip_address: "225.89.106.59"
      },
      {
        id: 83,
        first_name: "Wat",
        last_name: "Doding",
        email: "wdoding2a@bluehost.com",
        gender: "Male",
        ip_address: "5.187.140.214"
      },
      {
        id: 84,
        first_name: "Corney",
        last_name: "Seakes",
        email: "cseakes2b@addthis.com",
        gender: "Male",
        ip_address: "39.132.120.196"
      },
      {
        id: 85,
        first_name: "Tybie",
        last_name: "Haffard",
        email: "thaffard2c@abc.net.au",
        gender: "Female",
        ip_address: "202.39.166.200"
      },
      {
        id: 86,
        first_name: "Geri",
        last_name: "Younge",
        email: "gyounge2d@mlb.com",
        gender: "Male",
        ip_address: "189.126.155.161"
      },
      {
        id: 87,
        first_name: "Tamarah",
        last_name: "Dilloway",
        email: "tdilloway2e@sakura.ne.jp",
        gender: "Female",
        ip_address: "206.108.120.239"
      },
      {
        id: 88,
        first_name: "Anson",
        last_name: "Shinton",
        email: "ashinton2f@umich.edu",
        gender: "Male",
        ip_address: "137.76.109.98"
      },
      {
        id: 89,
        first_name: "Kathryn",
        last_name: "Quincey",
        email: "kquincey2g@elegantthemes.com",
        gender: "Female",
        ip_address: "193.8.221.40"
      },
      {
        id: 90,
        first_name: "Anestassia",
        last_name: "Robjohns",
        email: "arobjohns2h@wikispaces.com",
        gender: "Female",
        ip_address: "216.146.156.5"
      },
      {
        id: 91,
        first_name: "Melicent",
        last_name: "Colledge",
        email: "mcolledge2i@about.me",
        gender: "Female",
        ip_address: "153.244.26.111"
      },
      {
        id: 92,
        first_name: "Katusha",
        last_name: "Colleymore",
        email: "kcolleymore2j@cloudflare.com",
        gender: "Female",
        ip_address: "176.150.105.243"
      },
      {
        id: 93,
        first_name: "Marylynne",
        last_name: "Fennell",
        email: "mfennell2k@tripadvisor.com",
        gender: "Female",
        ip_address: "88.137.236.34"
      },
      {
        id: 94,
        first_name: "Cirillo",
        last_name: "Haskey",
        email: "chaskey2l@google.fr",
        gender: "Male",
        ip_address: "201.64.161.117"
      },
      {
        id: 95,
        first_name: "Marianne",
        last_name: "Pridie",
        email: "mpridie2m@elegantthemes.com",
        gender: "Female",
        ip_address: "16.140.54.120"
      },
      {
        id: 96,
        first_name: "Patrice",
        last_name: "Guerrieri",
        email: "pguerrieri2n@salon.com",
        gender: "Male",
        ip_address: "238.60.127.242"
      },
      {
        id: 97,
        first_name: "Billy",
        last_name: "Arnow",
        email: "barnow2o@pbs.org",
        gender: "Female",
        ip_address: "6.78.168.112"
      },
      {
        id: 98,
        first_name: "Bren",
        last_name: "Regi",
        email: "bregi2p@samsung.com",
        gender: "Male",
        ip_address: "164.5.178.49"
      },
      {
        id: 99,
        first_name: "Glynis",
        last_name: "Yerbury",
        email: "gyerbury2q@bigcartel.com",
        gender: "Female",
        ip_address: "60.57.129.215"
      },
      {
        id: 100,
        first_name: "Basil",
        last_name: "Lennon",
        email: "blennon2r@cargocollective.com",
        gender: "Male",
        ip_address: "38.132.162.246"
      }
    ];
  }
}
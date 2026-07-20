import type { Article, Author, Destination, RoadTrip } from "@/types/content";
const img=(id:string)=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;
export const authors:Author[]=[
 {id:"a1",slug:"elena-marinos",name:"Elena Marinos",bio:"A Greek-Australian writer drawn to island kitchens and unhurried ferries.",avatar:img("photo-1494790108377-be9c29b29330"),credentials:"Mediterranean editor",social:[]},
 {id:"a2",slug:"luca-bellini",name:"Luca Bellini",bio:"Italy-based travel writer and lifelong advocate for taking the scenic road.",avatar:img("photo-1500648767791-00dcc994a43e"),credentials:"Road trips correspondent",social:[]},
 {id:"a3",slug:"mara-summers",name:"Mara Summers",bio:"Editor, photographer and slow-travel obsessive.",avatar:img("photo-1534528741775-53994a69daeb"),credentials:"Founding editor",social:[]},
];
export const destinations:Destination[]=[
 ["greece","Greece","country","Greece","Sunlit islands, mountain roads and deeply rooted hospitality.","photo-1533105079780-92b9be482077"],
 ["italy","Italy","country","Italy","Artful cities, long lunches and roads made for lingering.","photo-1529260830199-42c24126f198"],
 ["greek-islands","Greek Islands","region","Greece","Whitewashed villages and coves reached by winding lanes.","photo-1530841377377-3ff06c0ca713"],
 ["tuscany","Tuscany","region","Italy","Hill towns, cypress roads and timeless country tables.","photo-1529260830199-42c24126f198"],
 ["puglia","Southern Italy","region","Italy","Baroque towns and a coastline of clear blue water.","photo-1602002418082-a4443e081dd1"],
 ["mediterranean-road-trips","Mediterranean Road Trips","region","Mediterranean","Routes where the journey is the destination.","photo-1500530855697-b586d89ba3ee"],
 ["kefalonia","Kefalonia","island","Greece","Forest-green hills above luminous Ionian bays.","photo-1603565816030-6b389eeb23cb"],
 ["sicily","Sicily","island","Italy","Volcanic landscapes, layered cities and bold flavours.","photo-1523906834658-6e24ef2386f9"],
].map((d,i)=>({id:`d${i+1}`,slug:d[0],name:d[1],type:d[2] as Destination["type"],country:d[3],description:d[4],heroImage:img(d[5]),featured:true,articleIds:[]}));
const articleSeed=[
 ["the-perfect-tuscany-road-trip","The Perfect Tuscany Road Trip","Road Trips","Tuscany","Italy","A week through Val d’Orcia, Chianti and the quieter roads between."],
 ["seven-days-in-kefalonia","Seven Days in Kefalonia","Islands","Kefalonia","Greece","A generous island itinerary with room for long swims and late dinners."],
 ["slow-travel-guide-ithaki","A Slow Travel Guide to Ithaki","Islands","Ithaki","Greece","Small harbours, walking paths and the pleasure of staying put."],
 ["best-coastal-towns-puglia","The Best Coastal Towns in Puglia","Destinations","Puglia","Italy","From Monopoli to Otranto, a considered route along the Adriatic."],
 ["driving-the-peloponnese","Driving the Peloponnese","Road Trips","Peloponnese","Greece","Ancient sites, wild peninsulas and roads that reward curiosity."],
 ["one-month-greece-cost","One Month in Greece: What It Really Costs","Long Stays","Greece","Greece","A realistic guide to homes, ferries, food and daily rhythms."],
 ["where-to-stay-corfu","Where to Stay in Corfu","Accommodation","Corfu","Greece","The island’s best bases, from old-town apartments to quiet coves."],
 ["sicily-by-car","Sicily by Car","Road Trips","Sicily","Italy","A circular journey through baroque towns, volcanic slopes and sea."],
 ["best-greek-islands-long-stay","The Best Greek Islands for a Long Stay","Long Stays","Greek Islands","Greece","Where everyday life remains as compelling as the beaches."],
 ["florence-beyond-main-attractions","Florence Beyond the Main Attractions","Culture","Florence","Italy","Workshops, neighbourhood tables and art beyond the obvious route."],
 ["mediterranean-summer-packing-guide","A Mediterranean Summer Packing Guide","Practical","Mediterranean","Mediterranean","A restrained wardrobe for ferries, cities and saltwater days."],
 ["plan-six-week-european-trip","How to Plan a Six-Week European Trip","Long Stays","Europe","Europe","Build a slower itinerary with fewer bases and richer days."],
];
const photos=["photo-1470770841072-f978cf4d019e","photo-1603565816030-6b389eeb23cb","photo-1530841377377-3ff06c0ca713","photo-1602002418082-a4443e081dd1","photo-1500530855697-b586d89ba3ee","photo-1507525428034-b723cf961d3e","photo-1523906834658-6e24ef2386f9","photo-1523906834658-6e24ef2386f9","photo-1533105079780-92b9be482077","photo-1529260830199-42c24126f198","photo-1500530855697-b586d89ba3ee","photo-1467269204594-9661b134dd2b"];
export const articles:Article[]=articleSeed.map((a,i)=>({id:`ar${i+1}`,slug:a[0],title:a[1],category:a[2],destination:a[3],country:a[4],excerpt:a[5],standfirst:a[5]+" This is travel designed around time, texture and a genuine sense of place.",content:["The best journeys begin with enough space to notice where you are. This route favours small roads, local tables and mornings without an agenda.","Begin early, but resist the urge to cover too much ground. A single village can hold a day’s worth of details: the first espresso, a shaded piazza and a road curling toward the hills.","Plan lightly, book the essentials and leave room for the places you cannot yet name. That balance is at the heart of slow Mediterranean travel."],heroImage:img(photos[i]),tags:[a[2].toLowerCase(),a[3].toLowerCase(),"slow travel"],author:authors[i%3].slug,publishedAt:`2026-0${(i%6)+1}-12`,updatedAt:"2026-07-01",readingTime:7+(i%5),featured:i<3,relatedArticleIds:[`ar${(i+1)%12+1}`,`ar${(i+2)%12+1}`],relatedDestinationIds:[`d${i%8+1}`],seoTitle:a[1],seoDescription:a[5],canonicalUrl:`https://summers.travel/articles/${a[0]}`,noindex:false}));
export const roadTrips:RoadTrip[]=["Tuscany Road Trip|Italy|7 days|photo-1529260830199-42c24126f198","Puglia Coastal Drive|Italy|8 days|photo-1602002418082-a4443e081dd1","Kefalonia by Car|Greece|6 days|photo-1603565816030-6b389eeb23cb","Sicily Road Trip|Italy|10 days|photo-1523906834658-6e24ef2386f9","Peloponnese Road Trip|Greece|12 days|photo-1500530855697-b586d89ba3ee"].map(x=>{const [title,place,duration,p]=x.split("|");return{title,place,duration,image:img(p)}});
export const islands=["Kefalonia","Ithaki","Corfu","Crete","Sicily","Sardinia"];

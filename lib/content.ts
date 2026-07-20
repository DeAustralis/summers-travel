import { articles, authors, destinations } from "@/data/content";
export interface ContentRepository { getArticles():typeof articles; getArticle(slug:string):typeof articles[number]|undefined; }
export const contentRepository:ContentRepository={getArticles:()=>articles,getArticle:(slug)=>articles.find(a=>a.slug===slug)};
export const getAuthor=(slug:string)=>authors.find(a=>a.slug===slug);
export const getDestination=(slug:string)=>destinations.find(d=>d.slug===slug);

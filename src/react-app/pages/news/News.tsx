import { useEffect, useState } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./News.css";
interface NewsItem {
    news_date: string;
    news_img_url: string;
    news_link: string;
    news_blurb: string;
}
export default function NewsPage() {
    const [theNews, setNews] = useState<NewsItem[]>([]);
    const [loadingNews, setLoadingNews] = useState(true);
    const [newsError, setNewsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch('/api/news');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();

                if (Array.isArray(result)) {
                    const parsed: NewsItem[] = result.map((item: any) => ({
                        news_date: item.date,
                        news_img_url: item.imgurl,
                        news_blurb: item.blurb,
                        news_link: item.link
                    }));
                    setNews(parsed);
                } else {
                    setNewsError("Invalid data format received: Expected an array of news objects.");
                }
            } catch (err: any) {
                console.error("Error fetching news data:", err);
                setNewsError(err.message);
            } finally {
                setLoadingNews(false);
            }
        };

        fetchNewsData();
    }, []);

    const NewsCollection = (() => {
        if (loadingNews) {
            return [{ news_date: "Loading", news_img_url: "Loading", news_blurb: "Loading", news_link: "Loading" }];
        }
        if (newsError) {
            return [{ news_date: "Error", news_img_url: "Error", news_blurb: "Error", news_link: "Error" }];
        }
        return theNews;
    })();

    return (
        <>
            <Navbar />
            <div className="card-news-wrapper">
            {NewsCollection.map((name, index) => (
                <NewsCard content={name} key={index} />
            ))}
            </div>
            <Footer />
        </>

    );
}
function NewsCard({ content }: { content: NewsItem }) {
    return (
        <a className="card-news" href={content.news_link}>
            <img src={content.news_img_url} className="card-news-image"></img>
            <div className="card-news-text">{content.news_blurb}</div>
        </a>
    );

}
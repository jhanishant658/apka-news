import React, { Component } from 'react';
import Navbar from './Navbar';
import NewsItem from './NewsItem';
import Spinner from './Spinner'; // Ensure the correct import name


export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            loading: false,
            nextPage: '', // Initialize nextPage as an empty string
        };
        this.scrollPosition = 0; // Initialize scroll position variable
    }


    fetchData = async (page = '') => {
        const { category, country } = this.props;
        const apiKey = 'pub_516837f9c3817c8a83842ce93c356dbe00810';
        let url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${category}&country=${country}`;


        if (page) {
            url += `&page=${page}`;
        }


        this.setState({ loading: true });


        try {
            // Preserve current scroll position
            this.scrollPosition = window.scrollY;


            const response = await fetch(url);
            const parsedData = await response.json();
            console.log('API Response:', parsedData); // Log API response


            if (response.ok) {
                this.setState(prevState => ({
                    results: [...prevState.results, ...(parsedData.results || [])], // Append new results
                    loading: false,
                    nextPage: parsedData.nextPage || null, // Update nextPage
                }), () => {
                    // Restore scroll position after state update
                    window.scrollTo(0, this.scrollPosition);
                });
            } else {
                console.error('Error fetching data:', parsedData);
                this.setState({ loading: false });
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            this.setState({ loading: false });
        }
    };


    handleScroll = () => {
        const { loading, nextPage } = this.state;
        if (loading || !nextPage) return;


        const scrollTop = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;


        console.log('Scroll Top:', scrollTop); // Log scroll position
        console.log('Scroll Height:', scrollHeight); // Log total scroll height
        console.log('Window Height:', windowHeight); // Log window height


        if (scrollTop + windowHeight >= scrollHeight - 200) { // Trigger when near bottom
            console.log('Fetching more data...');
            this.fetchData(nextPage); // Fetch next page
        }
    };


    componentDidMount() {
        this.fetchData(); // Fetch initial data
        window.addEventListener('scroll', this.handleScroll); // Add scroll event listener
    }


    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll); // Clean up scroll event listener
    }


    render() {
        const { results, loading } = this.state;


        return (
            <div className='bg-danger bg-gradient text-white'>
                <div className="Navbar" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
                    <Navbar />
                </div>
                
                <div className="container" style={{ marginTop: '60px' }}>
                    <div className="row">
                        {results.length > 0 ? (
                            results.map((element) => (
                                <div className="col-md-4" key={element.id || element.url}>
                                    <NewsItem 
                                        title={element.title || "No Title"} 
                                                         image_url={element.image_url || "https://via.placeholder.com/150"} 
                                                            description={element.description || "No Description"} 
                                                            source_name={element.source_name || "Unknown Source"} 
                                                          source_url={element.source_url}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>No news articles found.</p>
                        )}
                    </div>
                    {loading && (
                        <div className="spinner-container">
                            <Spinner />
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

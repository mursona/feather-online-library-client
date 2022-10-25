import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ResearchSummaryCard from '../../Shared/ResearchSummaryCard/ResearchSummaryCard';

const Home = () => {

    const allResearch = useLoaderData();
    return (
        <div>
            {
                allResearch.map(research => <ResearchSummaryCard
                key={research._id}
                research={research}
                >
                </ResearchSummaryCard>)
            }
        </div>
    );
};

export default Home;
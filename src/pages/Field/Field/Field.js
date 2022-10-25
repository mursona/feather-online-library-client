import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ResearchSummaryCard from '../../Shared/ResearchSummaryCard/ResearchSummaryCard';

const Field = () => {
    const categoryResearch = useLoaderData();
    return (
        <div>
            {
                categoryResearch.map(research =>
                <ResearchSummaryCard 
                    key={research._id}
                    research={research}
                    >
                </ResearchSummaryCard>)
            }
        </div>
    );
};

export default Field;
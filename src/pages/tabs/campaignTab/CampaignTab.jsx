import React, { useState, lazy, Suspense } from "react";
import content from "../../../content/campaignTab/CampaignContent.json"
import commonContent from "../../../content/CommonContent.json"

const Act1Tab = lazy(() => import('./Act1Tab'));
const Act2Tab = lazy(() => import('./Act2Tab'));
const Act3Tab = lazy(() => import('./Act3Tab'));
const Act1CTab = lazy(() => import('./Act1CruelTab'));
const Act2CTab = lazy(() => import('./Act2CruelTab'));
const Act3CTab = lazy(() => import('./Act3CruelTab'));

const CampaignTab = () => {
    const [activeTab, setActiveTab] = useState(content.tabTitles.act1);

    const renderContent = () => {
        switch (activeTab) {
            case content.tabTitles.act1:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <Act1Tab />
                    </Suspense>
                )
            case content.tabTitles.act2:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <Act2Tab />
                    </Suspense>
                )
            case content.tabTitles.act3:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <Act3Tab />
                    </Suspense>
                )
            case content.tabTitles.act1C:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <Act1CTab />
                    </Suspense>
                )
            case content.tabTitles.act2C:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <Act2CTab />
                    </Suspense>
                )
            case content.tabTitles.act3C:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <Act3CTab />
                    </Suspense>
                )

        }
    }

    return (
        <div>
            <nav>
                <button onClick={() => setActiveTab(content.tabTitles.act1)}>
                    {content.tabTitles.act1}
                </button>
                <button onClick={() => setActiveTab(content.tabTitles.act2)}>
                    {content.tabTitles.act2}
                </button>
                <button onClick={() => setActiveTab(content.tabTitles.act3)}>
                    {content.tabTitles.act3}
                </button>
                <button onClick={() => setActiveTab(content.tabTitles.act1C)}>
                    {content.tabTitles.act1C}
                </button>
                <button onClick={() => setActiveTab(content.tabTitles.act2C)}>
                    {content.tabTitles.act2C}
                </button>
                <button onClick={() => setActiveTab(content.tabTitles.act3C)}>
                    {content.tabTitles.act3C}
                </button>
            </nav>
            {renderContent()}
        </div>

    );
}

export default CampaignTab;
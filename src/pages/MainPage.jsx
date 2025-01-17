import React, { useState, lazy, Suspense } from "react";
import content from "../content/MainPageContent.json"
import commonContent from "../content/CommonContent.json"

const IntroductionTab = lazy(() => import('./tabs/introductionTab/IntroductionTab'));
const CampaignTab = lazy(() => import('./tabs/campaignTab/CampaignTab'));
const EndgameTab = lazy(() => import('./tabs/endgameTab/EndgameTab'));
const CraftingTab = lazy(() => import('./tabs/craftingTab/CraftingTab'))


const MainPage = () => {

    const [activeTab, setActiveTab] = useState(content.tabTitles.introduction);

    const renderContent = () => {
        switch (activeTab) {
            case content.tabTitles.introduction:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <IntroductionTab />
                    </Suspense>
                )
            case content.tabTitles.campaign:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <CampaignTab />
                    </Suspense>
                )
            case content.tabTitles.endgame:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <EndgameTab />
                    </Suspense>
                )
            case content.tabTitles.crafting:
                return (
                    <Suspense fallback={<div>{commonContent.loadingMessage}</div>}>
                        <CraftingTab />
                    </Suspense>
                )
        }
    }

    return (
        <div>
            <nav>
                <button onClick={() => {
                    setActiveTab(content.tabTitles.introduction);
                }}>
                    {content.tabTitles.introduction}
                </button>
                <button onClick={() => {
                    setActiveTab(content.tabTitles.campaign)
                }}>
                    {content.tabTitles.campaign}
                </button>
                <button onClick={() => {
                    setActiveTab(content.tabTitles.endgame);
                }}>
                    {content.tabTitles.endgame}
                </button>
                <button onClick={() => {
                    setActiveTab(content.tabTitles.crafting)
                }}>
                    {content.tabTitles.crafting}
                </button>
            </nav>
            <div>
                {renderContent()}
            </div>
        </div>
    )
}

export default MainPage;
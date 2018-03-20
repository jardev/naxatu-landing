import * as React from 'react';
import * as i18n from "i18n";
import {MainLayout, IMainLayoutProps} from './Components/MainLayout';
import {TokenStatsInterface} from '../Utils/TokenStats'
import {Intro} from './HomeComponent/Intro';
import {About} from './HomeComponent/About';
import {Citation} from './HomeComponent/Citation';
import {IcoStatus} from './HomeComponent/IcoStatus';
import {XataToken} from './HomeComponent/XataToken';
import {Roadmap} from './HomeComponent/Roadmap';
import {Team} from './HomeComponent/Team';
import {WhereHouse} from './HomeComponent/WhereHouse';
import {Challenge} from './HomeComponent/Challenge';
import {Partners} from './HomeComponent/Partners';
import {FAQ} from './HomeComponent/FAQ';
import {Heroes} from './HomeComponent/Heroes';
import {Contacts} from './HomeComponent/Contacts';
import {Advisers} from './HomeComponent/Advisers';

export interface IHomeViewProps {
    url: string;
    baseHost: string;
    language: string;
    token: TokenStatsInterface | null
}

export interface IHomeViewState {
}

export class HomeView extends React.Component<IHomeViewProps, IHomeViewState> {

    render() {

        const {url, baseHost, language, token = null} = this.props;

        const layoutProps: IMainLayoutProps = {
            title: ":house: " + i18n.__("Первое в мире ICO по сбору средств на хату в Киеве"),
            description: i18n.__("Это первое, и возможно, самое полезное ICO за все время существования Ethereum, где основатель собирает на полезную и нужную вещь - на собственную хату"),
            url: url,
            baseHost: baseHost,
            language: language
        };

        return (
            <MainLayout {...layoutProps}>
                <Intro />
                <IcoStatus token={token}/>
                <About />
                <Citation />
                {/*<WhereHouse />*/}
                <XataToken />
                <Roadmap />
                <Team />
                <Advisers />
                <Partners />
                <Challenge />
                <Heroes/>
                <FAQ />
                <Contacts />
            </MainLayout>
        );
    }
}
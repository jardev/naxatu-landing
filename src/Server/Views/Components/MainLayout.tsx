import * as path from 'path';
import * as fs from 'fs';
import * as React from 'react';
import {GTM} from '../../Utils/GTM';
import {Emojify, emojifyText} from '../../Utils/Emojify';
import {config} from '../../Config';

import {OpenGraph} from './OpenGraph';
import {NavigationMenu} from './NavigationMenu';

const version = config.get('app.version') || '0.0.0';
const gtmKey = config.get('app.gtmKey') || '';

export interface IMainLayoutProps {
    title?: string;
    description?: string;
    keywords?: string[];
    url: string;
    baseHost: string;
}

const criticalCSS = fs.readFileSync(
    path.resolve(__dirname, '../../../public/css/critical.css'),
    'utf-8'
);

const gtm = new GTM(gtmKey);

export class MainLayout extends React.Component<IMainLayoutProps, any> {
    render() {
        const {
            title = 'Title',
            description = '',
            keywords = [],
            children,
            url = '',
            baseHost = ''
        } = this.props;

        const mainCssAttribute = {
            href: "/css/main.css?v=" + version,
            async: true,
            rel: "stylesheet",
            type: "text/css"
        };

        const openGraphProps = {
            title: title,
            url: url,
            baseHost: baseHost
        };

        return (
            <html lang="ru">
            <head>
                <meta httpEquiv="Content-type" content="text/html; charset=utf-8"/>
                <meta name="Content-language" content="ru"/>
                <meta name="viewport"
                      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
                <meta name="format-detection" content="telephone=no"/>
                <title>{emojifyText(title)}</title>
                <meta name="keywords" content={emojifyText(keywords.join(', '))}/>
                <meta name="description" content={emojifyText(description)}/>
                <OpenGraph {...openGraphProps}/>
                <style dangerouslySetInnerHTML={{__html: criticalCSS}}/>
                <link {...mainCssAttribute}/>
                <link rel="shortcut icon" type="image/png" href="/favicon.ico"/>

                {gtm.renderHead()}
            </head>
            <body>
            {gtm.renderBody()}
            <NavigationMenu />
            {children}
            <script src={`/js/main.bundle.js?v=${version}`}/>
            <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"/>
            </body>
            </html>
        )
    }
}
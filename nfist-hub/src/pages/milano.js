import React from 'react';
import { NormalSection, Page, Seo } from 'dev-nfist-hub';

export default function MILPage() {
    return (
        <>
            <Seo title="Milano" useTitleTemplate={true} noIndex={true} />
            <Page>
                <NormalSection sectionId="milano" heading="Università degli Studi di Milano" />
            </Page>
        </>
    );
}

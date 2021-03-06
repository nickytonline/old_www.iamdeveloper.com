import React from 'react';
import { Layout, PageTitle, Section, Container } from 'components';

import styles from './404.module.scss';

const NotFoundPage: React.FC<{}> = () => (
    <Layout slug="/">
        <Section className={styles.notFoundBackground}>
            <Container>
                <PageTitle>NOT FOUND</PageTitle>
                <p>Looks like this page is missing or does not exist.</p>
            </Container>
        </Section>
    </Layout>
);

export default NotFoundPage;

import React from 'react';
import { graphql } from 'gatsby';
import { Content, HTMLContent, Layout, PageTitle } from 'components';
import { PageTemplateProps } from './page-template-props';

export type ThanksPageTemplateProps = PageTemplateProps;

export const ThanksPageTemplate: React.FC<ThanksPageTemplateProps> = ({
  title,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient section--thanks">
      <div className="container">
        <PageTitle>{title}</PageTitle>
        <PageContent className="content" content={content} />
      </div>
    </section>
  );
};

export type ThanksPageProps = {
  data: {
    markdownRemark: {
      frontmatter: {
        title: string;
      };
      html: string;
    };
  };
};

const ThanksPage: React.FC<ThanksPageProps> = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ThanksPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

// Leaving this as a default export because it's instantiated via gatsby-node.js
export default ThanksPage;

export const thanksPageQuery = graphql`
  query ThanksPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
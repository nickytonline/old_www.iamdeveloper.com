import CMS from 'netlify-cms';

import { AboutPagePreview } from './preview-templates/AboutPagePreview';
import { ThanksPagePreview } from './preview-templates/ThanksPagePreview';
import { ContactPagePreview } from './preview-templates/ContactPagePreview';
import { BlogPostPreview } from './preview-templates/BlogPostPreview';
import { UsesPagePreview } from './preview-templates/UsesPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('thanks', ThanksPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('contact', ContactPagePreview);
CMS.registerPreviewTemplate('uses', UsesPagePreview);

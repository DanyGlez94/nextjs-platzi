import { createElement, HTMLAttributes } from 'react';
import sanitizeHtml from 'sanitize-html';

type SanitizeHTMLProps = {
  children: string;
  tag: string;
} & HTMLAttributes<HTMLElement>;

export const SanitizeHTML = ({ tag, children, ...rest }: SanitizeHTMLProps) => {
  const sanitizedHtml = sanitizeHtml(children, {
    allowedTags: ['b', 'i', 'em', 'strong'],
  });

  return createElement(tag, { ...rest }, sanitizedHtml);
};

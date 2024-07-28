import { z } from 'zod';

const linkValidation = new RegExp(
  '^(https?:\\/\\/)?' + // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|[\\d\\.\\-]+)' + // domain name and extension
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
  '(\\#[-a-z\\d_]*)?$', 'i' // fragment locator
);

export const shortenLinkValidator = z.object({
  link: z.string().regex(linkValidation, {
    message: 'Enter valid URL',
  }),
});

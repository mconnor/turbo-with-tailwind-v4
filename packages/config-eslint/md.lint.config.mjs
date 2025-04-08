import markdown from '@eslint/markdown';

/**
 * A custom ESLint configuration for libraries that use Next.js.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default [
  {
    // Apply the Markdown processor to all .md files
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    // Enables extracting code blocks from all .md files so code blocks can be individually linted.
    processor: 'markdown/markdown', // Lint fenced code blocks in Markdown
    language: 'markdown/commonmark', // Or use "markdown/gfm" for GitHub-Flavored Markdown
    rules: {
      // Markdown rules
      'no-inline-html': 'off', // Disallow inline HTML in Markdown
      'markdown/fenced-code-language': 'warn', // Enforce language specification in fenced code blocks
      'markdown/heading-increment': 'warn', // Ensure heading levels increment by one
      'markdown/no-duplicate-headings': 'warn', // Disallow duplicate headings in the same document
      'markdown/no-empty-links': 'warn', // Disallow empty link elements
      'markdown/no-html': 'error', // Disallow HTML in Markdown
      'markdown/no-invalid-label-refs': 'error', // Disallow invalid label references
      'markdown/no-missing-label-refs': 'error', // Disallow missing label references
    },
  },
];

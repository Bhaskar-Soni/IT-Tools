/**
 * {{title}} Template Service
 * Handles business logic for the {{title}} template
 */

export const {{className}}Service = {
  /**
   * Get available document formats
   */
  getFormats() {
    return ['docx', 'pdf'];
  },

  /**
   * Get template metadata
   */
  getMetadata() {
    return {
      name: '{{name}}',
      title: '{{title}}',
      formats: ['docx', 'pdf'],
    };
  },
};

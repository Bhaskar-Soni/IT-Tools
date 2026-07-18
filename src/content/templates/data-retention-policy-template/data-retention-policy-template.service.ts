/**
 * Data Retention Policy Template Template Service
 * Handles business logic for the Data Retention Policy Template template
 */

export const DataRetentionPolicyTemplateService = {
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
      name: 'data-retention-policy-template',
      title: 'Data Retention Policy Template',
      formats: ['docx', 'pdf'],
    };
  },
};

/**
 * Security Risk Assessment Template Template Service
 * Handles business logic for the Security Risk Assessment Template template
 */

export const SecurityRiskAssessmentTemplateService = {
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
      name: 'security-risk-assessment-template',
      title: 'Security Risk Assessment Template',
      formats: ['docx', 'pdf'],
    };
  },
};

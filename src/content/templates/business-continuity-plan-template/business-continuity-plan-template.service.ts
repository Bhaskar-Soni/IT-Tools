/**
 * Business Continuity Plan Template Template Service
 * Handles business logic for the Business Continuity Plan Template template
 */

export const BusinessContinuityPlanTemplateService = {
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
      name: 'business-continuity-plan-template',
      title: 'Business Continuity Plan Template',
      formats: ['docx', 'pdf'],
    };
  },
};

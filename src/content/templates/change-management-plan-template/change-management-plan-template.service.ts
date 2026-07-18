/**
 * Change Management Plan Template Template Service
 * Handles business logic for the Change Management Plan Template template
 */

export const ChangeManagementPlanTemplateService = {
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
      name: 'change-management-plan-template',
      title: 'Change Management Plan Template',
      formats: ['docx', 'pdf'],
    };
  },
};

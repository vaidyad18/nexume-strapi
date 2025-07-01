import type { Schema, Struct } from '@strapi/strapi';

export interface EducationEducation extends Struct.ComponentSchema {
  collectionName: 'components_education_educations';
  info: {
    displayName: 'Education';
  };
  attributes: {
    degree: Schema.Attribute.String;
    endDate: Schema.Attribute.String;
    major: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    state: Schema.Attribute.String;
    universityName: Schema.Attribute.String;
  };
}

export interface ExperienceExperience extends Struct.ComponentSchema {
  collectionName: 'components_experience_experiences';
  info: {
    displayName: 'Experience';
  };
  attributes: {
    city: Schema.Attribute.String;
    company: Schema.Attribute.String;
    currentlyWorking: Schema.Attribute.Boolean;
    endDate: Schema.Attribute.String;
    startDate: Schema.Attribute.String;
    workSummary: Schema.Attribute.Text;
    workTitle: Schema.Attribute.String;
  };
}

export interface ProjectProject extends Struct.ComponentSchema {
  collectionName: 'components_project_projects';
  info: {
    displayName: 'Project';
  };
  attributes: {
    projectName: Schema.Attribute.String;
    projectSummary: Schema.Attribute.Text;
    techUsed: Schema.Attribute.String;
  };
}

export interface SkillSkill extends Struct.ComponentSchema {
  collectionName: 'components_skill_skills';
  info: {
    displayName: 'Skill';
  };
  attributes: {
    name: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'education.education': EducationEducation;
      'experience.experience': ExperienceExperience;
      'project.project': ProjectProject;
      'skill.skill': SkillSkill;
    }
  }
}

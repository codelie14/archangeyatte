import React from 'react';

interface SkillBarProps {
  skill: string;
  level: number;
}

export default function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../ProjectCard';

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

describe('ProjectCard', () => {
  const mockProject = {
    title: 'Test Project',
    description: 'This is a test project',
    technologies: ['React', 'TypeScript'],
    link: 'https://github.com/test/project',
    image: '/test-image.jpg',
  };

  it('renders project information correctly', () => {
    render(<ProjectCard project={mockProject} />);
    
    expect(screen.getByText('Test Project')).toBeInTheDocument();
    expect(screen.getByText('This is a test project')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders technology tags', () => {
    render(<ProjectCard project={mockProject} />);
    
    const techTags = screen.getAllByText(/React|TypeScript/);
    expect(techTags).toHaveLength(2);
  });
});
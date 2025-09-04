// Skills data from db.json
export const getSkillsData = async () => {
  try {
    // Try to fetch from JSON server first
    const response = await fetch('http://localhost:3001/skills');
    if (response.ok) {
      return await response.json();
    }
  } catch (error) {
    console.log('JSON server not running, using fallback skills data');
  }

  // Fallback skills data (from your db.json)
  return [
    { "id": 8, "name": "HTML5", "level": 95, "category": "Frontend", "icon": "🌐" },
    { "id": 7, "name": "CSS3", "level": 90, "category": "Frontend", "icon": "🎨" },
    { "id": 1, "name": "React", "level": 80, "category": "Frontend", "icon": "⚛️" },
    { "id": 6, "name": "C", "level": 90, "category": "Language", "icon": "🔣" },
    { "id": 5, "name": "C++", "level": 70, "category": "Language", "icon": "💻" },
    { "id": 4, "name": "Java", "level": 80, "category": "Language", "icon": "☕" },
    { "id": 2, "name": "JavaScript", "level": 90, "category": "Language", "icon": "🟨" },
    { "id": 9, "name": "Git", "level": 70, "category": "Tool", "icon": "📝" },
    { "id": 10, "name": "Redux", "level": 75, "category": "Frontend", "icon": "🔄" },
    { "id": 11, "name": "GitHub", "level": 80, "category": "Tool", "icon": "🐙" },
    { "id": 12, "name": "Tailwind", "level": 80, "category": "Tool", "icon": "🌬️" },
    { "id": 13, "name": "Bootstrap", "level": 60, "category": "Tool", "icon": "🅱️" },
    { "id": 14, "name": "Cursor AI", "level": 40, "category": "Tool", "icon": "🤖" },
  ];
};

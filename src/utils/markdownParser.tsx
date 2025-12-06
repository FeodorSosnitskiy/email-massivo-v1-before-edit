import React from 'react';

// Простой парсер для markdown-подобного текста
export const parseMarkdown = (text: string): React.ReactNode[] => {
  const lines = text.split('\n');
  const elements: React.ReactNode[] = [];
  let currentParagraph: string[] = [];
  let currentList: string[] = [];
  let inList = false;

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    
    // Заголовки ##
    if (trimmed.startsWith('## **') && trimmed.endsWith('**')) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`ul-${index}`} className="list-disc list-inside mb-4 space-y-2 ml-4">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
        inList = false;
      }
      const title = trimmed.replace('## **', '').replace('**', '');
      elements.push(<h2 key={`h2-${index}`} className="text-2xl font-bold mt-8 mb-4">{title}</h2>);
      return;
    }

    // Заголовки ## без **
    if (trimmed.startsWith('## ')) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`ul-${index}`} className="list-disc list-inside mb-4 space-y-2 ml-4">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
        inList = false;
      }
      const title = trimmed.replace('## ', '');
      elements.push(<h2 key={`h2-${index}`} className="text-2xl font-bold mt-8 mb-4">{title}</h2>);
      return;
    }

    // Списки
    if (trimmed.startsWith('* ') || trimmed.startsWith('- ')) {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      inList = true;
      currentList.push(trimmed.replace(/^[\*\-] /, ''));
      return;
    }

    // Пустая строка
    if (trimmed === '') {
      if (currentParagraph.length > 0) {
        elements.push(<p key={`p-${index}`} className="mb-4">{currentParagraph.join(' ')}</p>);
        currentParagraph = [];
      }
      if (inList && currentList.length > 0) {
        elements.push(
          <ul key={`ul-${index}`} className="list-disc list-inside mb-4 space-y-2 ml-4">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
        inList = false;
      }
      return;
    }

    // Обычный текст
    if (inList && currentList.length > 0) {
      elements.push(
        <ul key={`ul-${index}`} className="list-disc list-inside mb-4 space-y-2 ml-4">
          {currentList.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
      currentList = [];
      inList = false;
    }
    currentParagraph.push(trimmed);
  });

  // Добавляем оставшиеся элементы
  if (currentParagraph.length > 0) {
    elements.push(<p key="p-final" className="mb-4">{currentParagraph.join(' ')}</p>);
  }
  if (inList && currentList.length > 0) {
    elements.push(
      <ul key="ul-final" className="list-disc list-inside mb-4 space-y-2 ml-4">
        {currentList.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    );
  }

  return elements;
};



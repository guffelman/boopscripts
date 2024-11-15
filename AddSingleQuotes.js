/**
  {
    "api":1,
    "name":"Add Single Quotes Around Each Line",
    "description":"Adds singlequotes around every line of text",
    "author":"Garrett Uffelman (@guffelman)",
    "icon":"quote",
    "tags":"add,single,quotes,around,each,line"
  }
**/

function main(state) {
    if (typeof state.text !== 'string') {
        throw new TypeError('Expected state.text to be a string');
    }

    // Split the input into lines, handling both Unix and Windows line endings
    const lines = state.text.split(/\r?\n/);
    
    // Process each line
    const quotedLines = lines.map(line => {
        const trimmedLine = line.trim(); // Optional: remove extra whitespace
        return `'${trimmedLine}'`;
    });
    
    // Join the lines back into a single string with the original line endings
    state.text = quotedLines.join('\n');
}

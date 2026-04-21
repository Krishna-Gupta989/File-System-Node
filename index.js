const http = require('http');
const fs = require('fs/promises');
const url = require('url');

const PORT = 3000;

async function fetchRecord() {
    return await fs.readFile('record.txt', 'utf-8');
}

async function saveRecord(content) {
    await fs.writeFile('record.txt', content);
}

const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'text/html' });

    // Home route 
    if (path === '/') {
        const content = await fetchRecord();
        res.write(`
            <h2>Record from file</h2>
            <pre>${content}</pre>
            <hr>
            <p>
                /insert?item=Hello <br>
                /modify?prev=Hello&curr=Hi <br>
                /remove?item=Hi
            </p>
        `);
        res.end();
    }

    // Insert route
    else if (path === '/insert') {
        const oldContent = await fetchRecord();
        const newContent = oldContent + '\n' + query.item;
        await saveRecord(newContent);
        res.write('Record Inserted');
        res.end();
    }

    // Modify route
    else if (path === '/modify') {
        const content = await fetchRecord();
        const updated = content.replace(query.prev, query.curr);
        await saveRecord(updated);
        res.write('Record Modified');
        res.end();
    }

    // Remove route
    else if (path === '/remove') {
        const content = await fetchRecord();
        const filtered = content
            .split('\n')
            .filter(line => line.trim().toLowerCase() !== query.item.trim().toLowerCase())
            .join('\n');

        await saveRecord(filtered);
        res.write('Record Removed');
        res.end();
    }

    // a default route
    else {
        res.write('Endpoint not found');
        res.end();
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
chrome.runtime.onMessage.addListener((request) => {
    const tagStyles = {
        'BUTTON': '1px solid #da8301',
        'P': '1px solid #ac050b',
        'DIV': '1px solid #036cdb',
        'H1': '1px solid #3e5e85',
        'H2': '1px solid #3e5e85',
        'H3': '1px solid #3e5e85',
        'H4': '1px solid #3e5e85',
        'H5': '1px solid #3e5e85',
        'H6': '1px solid #3e5e85',
    };
      
    const tags = document.body.querySelectorAll(Object.keys(tagStyles));

    tags.forEach(tag => {
        if (!request.active) {
            tag.style.outline = tagStyles[tag.nodeName];
        } else {
            tag.style.outline = '';
        }
    });

    chrome.storage.local.set({"active": !request.active});
});

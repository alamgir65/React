let setStorageValue = () => {
    const id = document.getElementById('storage-id').value;
    const value = document.getElementById('storage-value').value;
    localStorage.setItem(id,value);
    document.getElementById('storage-id').value = '';
    document.getElementById('storage-value').value = '';
}
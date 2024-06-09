// Ensure the DOM is fully loaded before running the script
$(document).ready(function() {
    $('#create-button').click(function() {
        const addTask = $('#ipt-Task').val()

        if (addTask.trim() === ''){
            alert('Please enter a task before adding.')
        } else {
            // Append a new list item with the task value to the unordered list within the element with class 'task-list'
            $('.task-list ul').append(`<li>${addTask}</li>`)
            // Clear the input field after adding the task
            $('#ipt-Task').val('')
        }
    })
    // Add a click event listener to dynamically created list items within the element with class 'task-list'
    $(document).on('click', '.task-list li', function() {
        $(this).toggleClass('completed')
    })

})
    

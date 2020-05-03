<script type="text/javascript" charset="utf8">
  $(document).ready(function() {
    $('#member').DataTable({
      "ajax": {
          "url": "https://0ik98nbwxb.execute-api.eu-west-2.amazonaws.com/dev/members",
          "dataSrc": ""
       },
      "columns": [
        { "data": "id" },
        { "data": "password" },
        { "data": "name" },
        { "data": "tel" },
        { "data": "mail" },
        { "data": "position" },
        { "data": "permission" },
        { "data": "leaves" },
        { "data": "note" }
      ]
    })
  });
</script>

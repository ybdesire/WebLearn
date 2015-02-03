<%@ Page Language="C#"  %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.QueryString["name"] == "Jack" && Request.QueryString["age"] == "188")
            Response.Write("88888");
        else
            Response.Write("0");
    }
</script>
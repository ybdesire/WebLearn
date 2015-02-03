<%@ Page Language="C#"  %>

<script runat="server">
    protected void Page_Load(object sender, EventArgs e)
    {   
        //get the data at the POST request and send it back
        var oSR = new System.IO.StreamReader(Request.InputStream);
        string sContent = oSR.ReadToEnd();
        Response.Write(sContent);
    }
</script>
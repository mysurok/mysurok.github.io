import java.io.*;

/*
 * Created on 07.12.2003
 *
 */

/**
 * @author xeye 07.12.2003 21:22:13
 * 
 */
public class Ioconv
{

	public static void main(String[] args) throws Exception
	{
        InputStreamReader ior = new InputStreamReader(new FileInputStream(args[0]),"UTF-8"); 
        OutputStreamWriter iow = new OutputStreamWriter(new FileOutputStream(args[0]+"_"),"Cp1251");
        int r;
        while((r = ior.read())>0 )
        {
            iow.write(r);
        }
	}
}

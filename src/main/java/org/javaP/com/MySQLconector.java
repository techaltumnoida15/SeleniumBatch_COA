package org.javaP.com;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import org.testng.annotations.Test;

public class MySQLconector {

	@Test
	public void dbCOnnection() throws Exception {
		// Define variables
		String mySQL, myDB, mySQLDB, myDriver, myT1, myUName, myPswd;
		String myQuery1, myQuery2;
		Connection myCon = null;
		Statement mySt;
		PreparedStatement myPst;
		ResultSet rs1, rs2;

		// Initialize variable
		mySQL = "jdbc:mysql://localhost:3306/";
		myDB = "techaltum";
		mySQLDB = mySQL + myDB;
		myDriver = "com.mysql.jdbc.Driver";
		myUName = "root";
		myPswd = "admin";

		Object myDC = Class.forName(myDriver).newInstance();
		myCon = DriverManager.getConnection(mySQLDB, myUName, myPswd);
		mySt = myCon.createStatement();

		// One record
		myQuery1 = "Select * from stud_details";
		rs1 = mySt.executeQuery(myQuery1);

		if (rs1 == null) {
			System.out.print("Empty result set");
		}

		/*
		 * rs1.next(); System.out.print(rs1.getString("name"));
		 * System.out.print(rs1.getString("language"));
		 * System.out.print(rs1.getString("company"));
		 */

		// Going through all the records
		/*
		 * while (rs1.next()) { System.out.print(rs1.getString("name"));
		 * System.out.print(rs1.getString("language"));
		 * System.out.print(rs1.getString("company")); System.out.println(); }
		 */

		// Prepared statement for parameterizing our queries
		myQuery1 = "Select * from stud_details where name=? and language=?";
		myPst = myCon.prepareStatement(myQuery1);
		myPst.setString(1, "Amit");
		myPst.setString(2, "Java");
		rs1 = myPst.executeQuery();
		// Going through all the records
		rs1.beforeFirst(); // starts from the beginning
		while (rs1.next()) {
			if (rs1.isFirst()) {
				System.out.println("This is the first");
			}

			System.out.print(rs1.getString("name"));
			System.out.print(rs1.getString("language"));
			System.out.print(rs1.getString("company"));
			System.out.println();
			if (rs1.isLast()) {
				System.out.println("This is the Last");
			}
		}

	}
}

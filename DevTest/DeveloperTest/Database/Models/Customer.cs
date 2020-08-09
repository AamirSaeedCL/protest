using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DeveloperTest.Database.Models
{
    public class Customer
    {
        public int CustomerId { get; set; }
        public string Name { get; set; }
        public CustomerType Type { get; set; }

    }

    public enum CustomerType
    {
        Large = 1,
        Small = 2
    }
}
